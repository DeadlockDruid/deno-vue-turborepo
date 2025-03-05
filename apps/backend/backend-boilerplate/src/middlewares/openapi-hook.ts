import type { Hook } from "@hono/zod-openapi";
import { STATUS_CODES } from "../utils/constants.ts";

/**
 * Default OpenAPI hook for validating request and response schemas.
 * Returns a 422 UNPROCESSABLE_ENTITY response if validation fails.
 *
 * @param result - The validation result from Hono's OpenAPI processing.
 * @param c - The Hono context object.
 * @returns A JSON response with error details if validation fails.
 */

// deno-lint-ignore no-explicit-any
export const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: result.error,
      },
      STATUS_CODES.UNPROCESSABLE_ENTITY,
    );
  }
};
