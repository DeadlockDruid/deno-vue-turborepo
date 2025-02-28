import { createRouter } from "../lib/create-app.ts";
import { createRoute } from "@hono/zod-openapi";
import {
  openAPIJsonContent,
  openAPICreateMessageObjectSchema,
  successResponse,
} from "../utils/commonFunction.ts";
import { CONSTANTS } from "../utils/helpers/constant.ts";
import { OPEN_API_DOC_MESSAGE } from "./open-api.message.ts";

const index = createRouter().openapi(
  createRoute({
    tags: ["Index"], //it defines routing tag
    method: "get",
    path: "/api",
    responses: {
      [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
        openAPICreateMessageObjectSchema(OPEN_API_DOC_MESSAGE.TASK.TASK_APIS),
        OPEN_API_DOC_MESSAGE.TASK.INDEX_API_NAME,
      ),
    },
  }),
  (c) => {
    const result = { details: OPEN_API_DOC_MESSAGE.TASK.INDEX_API_MESSAGE };

    return c.json(successResponse(result), CONSTANTS.STATUS_CODES.OK);
  },
);

export default index;
