import { createRouter } from "../lib/create-app.ts";
import { createRoute } from "@hono/zod-openapi";
import {
  jsonContent,
  createMessageObjectSchema,
} from "../helpers/openapi-helpers.ts";
import { successResponse } from "../helpers/openapi-response-helpers.ts";
import { STATUS_CODES, STATUS_PHRASES } from "../utils/constants.ts";
import { OPEN_API_DOC_MESSAGES } from "./openapi.messages.ts";
import taskRoutes from "./tasks/tasks.index.ts";

const index = createRouter();

// Register each resource's routes
index.route("/", taskRoutes);

// OpenAPI Documentation Route
index.openapi(
  createRoute({
    tags: ["Index"],
    method: "get",
    path: "/api",
    responses: {
      [STATUS_CODES.OK]: jsonContent(
        createMessageObjectSchema(OPEN_API_DOC_MESSAGES.GLOBAL.API_INDEX),
        OPEN_API_DOC_MESSAGES.GLOBAL.INDEX_API_NAME,
      ),
    },
  }),
  (c) => {
    return c.json(
      successResponse({ details: "API Documentation" }),
      STATUS_PHRASES.OK,
    );
  },
);

export default index;
