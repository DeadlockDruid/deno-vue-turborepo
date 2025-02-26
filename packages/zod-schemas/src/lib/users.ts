import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(3, "Name should have a minimum of 3 characters."),
    email: z.string().email("Invalid email"),
  })
  .strict();

export type User = z.infer<typeof userSchema>;
