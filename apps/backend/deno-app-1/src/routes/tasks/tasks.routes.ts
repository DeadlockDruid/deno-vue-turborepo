import { createRoute, z } from "@hono/zod-openapi";
import { openAPIJsonContent } from "../../utils/commonFunction.ts";
import { CONSTANTS } from "../../utils/helpers/constant.ts";
import {
  taskSelectSchema
} from "../../database/schema/task-schema.ts";
import { OPEN_API_DOC_MESSAGE } from "../open-api.message.ts";
const tags = ["Tasks"];

export const listTask = createRoute({
  path: "/",
  method: "get",
  tags,
  responses: {
    [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
      z.array(taskSelectSchema),
      OPEN_API_DOC_MESSAGE.TASK.TASK_LIST,
    ),
    [CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR]: openAPIJsonContent(
      z.object({
        error: z.string().openapi({
          example: OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
        }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
    ),
  },
});

export const createTask = createRoute({
  path: "/",
  method: "post",
  tags,
  responses: {
    [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
      taskSelectSchema,
      OPEN_API_DOC_MESSAGE.TASK.CREATED_TASK,
    ),
    [CONSTANTS.STATUS_CODES.BAD_REQUEST]: openAPIJsonContent(
      z.object({
        error: z
          .string()
          .openapi({ example: OPEN_API_DOC_MESSAGE.TASK.INVALID_REQUEST }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INVALID_REQUEST,
    ),
    [CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR]: openAPIJsonContent(
      z.object({
        error: z.string().openapi({
          example: OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
        }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
    ),
  },
});

export const getTask = createRoute({
  path: "/{id}",
  method: "get",
  tags,
  responses: {
    [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
      taskSelectSchema,
      OPEN_API_DOC_MESSAGE.TASK.GET_TASK,
    ),
    [CONSTANTS.STATUS_CODES.NOT_FOUND]: openAPIJsonContent(
      z.object({
        message: z
          .string()
          .openapi({ example: OPEN_API_DOC_MESSAGE.TASK.TASK_NOT_FOUND }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.TASK_NOT_FOUND,
    ),
    [CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR]: openAPIJsonContent(
      z.object({
        error: z.string().openapi({
          example: OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
        }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
    ),
  },
});

export const removeTask = createRoute({
  path: "/{id}",
  method: "delete",
  tags,
  responses: {
    [CONSTANTS.STATUS_CODES.NO_CONTENT]: {
      description: OPEN_API_DOC_MESSAGE.TASK.DELETED_TASK,
    },
    [CONSTANTS.STATUS_CODES.INVALID_DATA]: openAPIJsonContent(
      // createErrorSchema(idParamsSchema),
      z.object({
        message: z
          .string()
          .openapi({ example: OPEN_API_DOC_MESSAGE.TASK.INVALID_TASK_ID }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INVALID_TASK_ID,
    ),
    [CONSTANTS.STATUS_CODES.NOT_FOUND]: openAPIJsonContent(
      z.object({
        message: z
          .string()
          .openapi({ example: OPEN_API_DOC_MESSAGE.TASK.TASK_NOT_FOUND }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.TASK_NOT_FOUND,
    ),
    [CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR]: openAPIJsonContent(
      z.object({
        error: z.string().openapi({
          example: OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
        }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
    ),
  },
});

export const patchTask = createRoute({
  path: "/{id}",
  method: "patch",
  tags,
  responses: {
    [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
      taskSelectSchema,
      OPEN_API_DOC_MESSAGE.TASK.UPDATED_TASK,
    ),
    [CONSTANTS.STATUS_CODES.INVALID_DATA]: openAPIJsonContent(
      // createErrorSchema(idParamsSchema),
      z.object({
        message: z
          .string()
          .openapi({ example: OPEN_API_DOC_MESSAGE.TASK.INVALID_TASK_ID }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INVALID_TASK_ID,
    ),
    [CONSTANTS.STATUS_CODES.NOT_FOUND]: openAPIJsonContent(
      z.object({
        message: z
          .string()
          .openapi({ example: OPEN_API_DOC_MESSAGE.TASK.TASK_NOT_FOUND }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.TASK_NOT_FOUND,
    ),
    [CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR]: openAPIJsonContent(
      z.object({
        message: z.string().openapi({
          example: OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
        }),
      }),
      OPEN_API_DOC_MESSAGE.TASK.INTERNAL_SERVER_ERROR,
    ),
  },
});

export type ListTaskRoute = typeof listTask;
export type CreateTask = typeof createTask;
export type GetTask = typeof getTask;
export type RemoveTask = typeof removeTask;
export type PatchTask = typeof patchTask;
