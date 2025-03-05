import { eq } from "drizzle-orm";
import { STATUS_CODES, ZOD_ERRORS } from "../utils/constants.ts";

import type { AppRouteHandler } from "../lib/types.ts";

import db from "../database/index.ts";
import { tasks } from "../database/schema/index.ts";
import { OPEN_API_DOC_MESSAGES } from "../routes/openapi.messages.ts";

import type {
  CreateRoute,
  GetOneRoute,
  ListRoute,
  PatchRoute,
  RemoveRoute,
} from "../routes/tasks/tasks.routes.ts";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();

  return c.json(tasks, STATUS_CODES.OK);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const task = c.req.valid("json");
  const [inserted] = await db.insert(tasks).values(task).returning();

  return c.json(inserted, STATUS_CODES.CREATED);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid("param");

  const task = await db.query.tasks.findFirst({
    where(fields, operators) {
      return operators.eq(fields.id, id);
    },
  });

  if (!task) {
    return c.json(
      {
        message: OPEN_API_DOC_MESSAGES.TASK.TASK_NOT_FOUND,
      },
      STATUS_CODES.NOT_FOUND,
    );
  }

  return c.json(task, STATUS_CODES.OK);
};

export const patch: AppRouteHandler<PatchRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const updates = c.req.valid("json");

  if (Object.keys(updates).length === 0) {
    return c.json(
      {
        success: false,
        error: {
          issues: [
            {
              code: ZOD_ERRORS.INVALID_UPDATES,
              path: [],
              message: OPEN_API_DOC_MESSAGES.TASK.NO_UPDATES_PROVIDED,
            },
          ],
          name: ZOD_ERRORS.VALIDATION_ERROR,
        },
      },
      STATUS_CODES.UNPROCESSABLE_ENTITY,
    );
  }

  const [task] = await db
    .update(tasks)
    .set(updates)
    .where(eq(tasks.id, id))
    .returning();

  if (!task) {
    return c.json(
      {
        message: OPEN_API_DOC_MESSAGES.TASK.TASK_NOT_FOUND,
      },
      STATUS_CODES.NOT_FOUND,
    );
  }

  return c.json(task, STATUS_CODES.OK);
};

export const remove: AppRouteHandler<RemoveRoute> = async (c) => {
  const { id } = c.req.valid("param");

  const result = await db.delete(tasks).where(eq(tasks.id, id));

  if (result.rowsAffected === 0) {
    return c.json(
      {
        message: OPEN_API_DOC_MESSAGES.TASK.TASK_NOT_FOUND,
      },
      STATUS_CODES.NOT_FOUND,
    );
  }

  return c.body(null, STATUS_CODES.NO_CONTENT);
};
