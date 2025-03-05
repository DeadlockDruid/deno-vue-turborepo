import type { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import type { pino } from "pino";

export interface AppBindings {
  Variables: {
    logger: ReturnType<typeof pino>;
  };
}

export type AppOpenAPI = OpenAPIHono<AppBindings>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<
  R,
  AppBindings
>;
