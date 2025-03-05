import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, defaultHook } from "../middlewares/index.ts";
import { requestLogger } from "../middlewares/logger.ts";
import type { AppBindings } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();

  app.use("*", requestLogger);

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
