import { createRoute, z } from "@hono/zod-openapi";
import {
  jsonContent,
  jsonContentRequired,
} from "../../helpers/openapi-helpers.ts";
import { STATUS_CODES } from "../../utils/constants.ts";
import {
  selectTasksSchema,
  insertTasksSchema,
  updateTasksSchema,
  idParamsSchema,
} from "../../database/schema/task-schema.ts";
import { createErrorSchema } from "../../utils/error-handler.ts";
import { OPEN_API_DOC_MESSAGES } from "../openapi.messages.ts";
import { notFoundSchema } from "../../helpers/openapi-helpers.ts";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [STATUS_CODES.OK]: jsonContent(
      z.array(selectTasksSchema),
      OPEN_API_DOC_MESSAGES.TASK.TASK_LIST,
    ),
  },
});

export const create = createRoute({
  path: "/tasks",
  method: "post",
  request: {
    body: jsonContentRequired(
      insertTasksSchema,
      OPEN_API_DOC_MESSAGES.TASK.CREATE_TASK,
    ),
  },
  tags,
  responses: {
    [STATUS_CODES.OK]: jsonContent(
      selectTasksSchema,
      OPEN_API_DOC_MESSAGES.TASK.CREATED_TASK,
    ),
    [STATUS_CODES.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(insertTasksSchema),
      OPEN_API_DOC_MESSAGES.TASK.UNPROCESSABLE_ENTITY,
    ),
  },
});

export const getOne = createRoute({
  path: "/tasks/{id}",
  method: "get",
  request: {
    params: idParamsSchema,
  },
  tags,
  responses: {
    [STATUS_CODES.OK]: jsonContent(
      selectTasksSchema,
      OPEN_API_DOC_MESSAGES.TASK.GET_TASK,
    ),
    [STATUS_CODES.NOT_FOUND]: jsonContent(
      notFoundSchema,
      OPEN_API_DOC_MESSAGES.TASK.TASK_NOT_FOUND,
    ),
    [STATUS_CODES.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(idParamsSchema),
      OPEN_API_DOC_MESSAGES.TASK.INVALID_TASK_ID,
    ),
  },
});

export const patch = createRoute({
  path: "/tasks/{id}",
  method: "patch",
  request: {
    params: idParamsSchema,
    body: jsonContentRequired(
      updateTasksSchema,
      OPEN_API_DOC_MESSAGES.TASK.UPDATE_TASK,
    ),
  },
  tags,
  responses: {
    [STATUS_CODES.OK]: jsonContent(
      selectTasksSchema,
      OPEN_API_DOC_MESSAGES.TASK.UPDATED_TASK,
    ),
    [STATUS_CODES.NOT_FOUND]: jsonContent(
      notFoundSchema,
      OPEN_API_DOC_MESSAGES.TASK.TASK_NOT_FOUND,
    ),
    [STATUS_CODES.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(updateTasksSchema).or(
        createErrorSchema(idParamsSchema),
      ),
      OPEN_API_DOC_MESSAGES.TASK.UNPROCESSABLE_ENTITY,
    ),
  },
});

export const remove = createRoute({
  path: "/tasks/{id}",
  method: "delete",
  request: {
    params: idParamsSchema,
  },
  tags,
  responses: {
    [STATUS_CODES.NO_CONTENT]: {
      description: OPEN_API_DOC_MESSAGES.TASK.DELETED_TASK,
    },
    [STATUS_CODES.NOT_FOUND]: jsonContent(
      notFoundSchema,
      OPEN_API_DOC_MESSAGES.TASK.TASK_NOT_FOUND,
    ),
    [STATUS_CODES.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(idParamsSchema),
      OPEN_API_DOC_MESSAGES.TASK.INVALID_TASK_ID,
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
export type PatchRoute = typeof patch;
export type RemoveRoute = typeof remove;
