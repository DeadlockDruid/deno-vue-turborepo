import type { MiddlewareHandler } from "hono";
import pino from "pino";
import { logInfo, logError, logWarn } from "@repo/pino-logger/index.js";

const logger = pino({ level: "info" });

export const requestLogger: MiddlewareHandler = async (c, next) => {
  const requestId = crypto.randomUUID();
  const startTime = performance.now();

  const ip =
    c.req.raw.headers.get("x-forwarded-for")?.split(",").shift()?.trim() ||
    (c.req.raw as unknown as { socket?: { remoteAddress?: string } })?.socket
      ?.remoteAddress ||
    "unknown";

  const userAgent = c.req.raw.headers.get("user-agent") || "unknown";

  // Attach logger to context
  c.set("logger", logger);

  logInfo(logger, "Incoming request", {
    requestId,
    method: c.req.method,
    url: c.req.url,
    ip,
    userAgent,
  });

  await next();

  const duration = performance.now() - startTime;
  const statusCode = c.res.status;

  if (statusCode >= 500) {
    logError(logger, "Server error", undefined, {
      requestId,
      status: statusCode,
      duration,
    });
  } else if (statusCode >= 400) {
    logWarn(logger, "Client error", {
      requestId,
      status: statusCode,
      duration,
    });
  } else {
    logInfo(logger, "Request processed", {
      requestId,
      status: statusCode,
      duration,
    });
  }

  if (duration > 1000) {
    logWarn(logger, "Slow response", {
      requestId,
      status: statusCode,
      duration: `${duration.toFixed(2)}ms`,
      message: `Request took longer than expected: ${c.req.method} ${c.req.url}`,
    });
  }
};
