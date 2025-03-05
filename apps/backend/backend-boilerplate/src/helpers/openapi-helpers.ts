import { z } from "@hono/zod-openapi";
import type { ZodSchema } from "../utils/error-handler";

/**
 * Generates OpenAPI-compliant JSON content schema.
 *
 * @param schema - The Zod schema for the response body.
 * @param description - Description of the response.
 * @returns OpenAPI JSON content object.
 */
export const jsonContent = <T extends ZodSchema>(
  schema: T,
  description: string,
) => ({
  content: {
    "application/json": {
      schema,
    },
  },
  description,
});

/**
 * Same as `jsonContent`, but ensures the field is required in OpenAPI docs.
 *
 * @param schema - The Zod schema for the response body.
 * @param description - Description of the response.
 * @returns OpenAPI JSON content object with `required: true`.
 */
export const jsonContentRequired = <T extends ZodSchema>(
  schema: T,
  description: string,
) => ({
  ...jsonContent(schema, description),
  required: true,
});

/**
 * Creates a standardized OpenAPI message response schema.
 *
 * @param exampleMessage - Default message example (default: "Hello World").
 * @returns A Zod object schema for message responses.
 */
export const createMessageObjectSchema = (
  exampleMessage: string = "Hello World",
) => {
  return z
    .object({
      message: z.string(),
    })
    .openapi({
      example: {
        message: exampleMessage,
      },
    });
};

/**
 * Schema for 404 Not Found error response.
 */
export const notFoundSchema = z.object({
  success: z.boolean().openapi({
    example: false,
  }),
  error: z.object({
    message: z.string().openapi({
      example: "Resource not found.",
    }),
  }),
});
