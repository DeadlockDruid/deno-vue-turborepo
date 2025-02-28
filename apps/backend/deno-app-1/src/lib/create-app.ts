import { OpenAPIHono } from "@hono/zod-openapi";
import { pinoLogger } from "@repo/pino-logger/index.js";
import { openapi as defaultHook } from "stoker";
import {
  internalServerErrorResponse,
  notFoundResponse,
} from "./../utils/commonFunction.ts";

export function createRouter() {
  const router = new OpenAPIHono({
    strict: false,
    defaultHook,
  });

  return router;
}

export default function createApp() {
  const app = createRouter();

  app.use("*", pinoLogger);
  app.notFound(notFoundResponse);
  app.onError(internalServerErrorResponse);

  return app;
}
