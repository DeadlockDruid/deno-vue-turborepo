import type { ErrorHandler } from "@hono/zod-openapi";
import type { StatusCode } from "hono/utils/http-status";
import { logError } from "@repo/pino-logger/index.js";
import { STATUS_CODES } from "../utils/constants.ts";

export const onError: ErrorHandler = (err, c) => {
  const statusCode: StatusCode =
    "status" in err && err.status !== STATUS_CODES.OK
      ? (err.status as StatusCode)
      : STATUS_CODES.INTERNAL_SERVER_ERROR;

  const logger = c.get("logger");

  if (logger) {
    logError(logger, "Unhandled error", err, { statusCode });
  } else {
    console.error("Logger is missing from context!", err);
  }

  return c.json(
    {
      message: "Internal Server Error",
    },
    statusCode,
  );
};
