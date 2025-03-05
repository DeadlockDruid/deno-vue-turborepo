import { z } from "@hono/zod-openapi";

// Base ID validation schema
export const baseIdSchema = z.coerce.number().int().positive();

/**
 * Creates an ID schema for a specific entity
 * @param paramName - The name of the ID parameter (e.g., "taskId", "userId")
 */
export const createIdSchema = (paramName: string) =>
  baseIdSchema.openapi({
    param: {
      name: paramName,
      in: "path",
      required: true,
    },
    required: [paramName],
    example: 1,
  });

/**
 * Creates an ID params schema for a specific entity
 * @param paramName - The name of the ID parameter
 */
export const createIdParamsSchema = (paramName: string) =>
  z.object({ [paramName]: createIdSchema(paramName) });
