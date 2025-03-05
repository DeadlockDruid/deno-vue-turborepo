import { z } from "@hono/zod-openapi";

/**
 * ZodSchema type definition to allow different schema types.
 */
export type ZodSchema =
  | z.ZodUnion<[z.AnyZodObject, ...z.AnyZodObject[]]>
  | z.AnyZodObject
  | z.ZodArray<z.AnyZodObject>;

/**
 * Generates a standardized error schema based on the given Zod schema.
 *
 * @param schema - The Zod schema to generate error messages from.
 * @returns A Zod object schema defining standardized error responses.
 */
export const createErrorSchema = <T extends ZodSchema>(schema: T) => {
  const { error } = schema.safeParse(
    schema._def.typeName === z.ZodFirstPartyTypeKind.ZodArray ? [] : {},
  );

  return z.object({
    success: z.boolean().openapi({
      example: false,
    }),
    error: z
      .object({
        issues: z.array(
          z.object({
            code: z.string(),
            path: z.array(z.union([z.string(), z.number()])),
            message: z.string().optional(),
          }),
        ),
        name: z.string(),
      })
      .openapi({
        example: error,
      }),
  });
};
