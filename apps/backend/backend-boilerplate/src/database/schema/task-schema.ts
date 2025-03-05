import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";
import { z } from "@hono/zod-openapi";

import { createIdParamsSchema } from "./utils.ts";

//schema defination
export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  done: boolean().notNull().default(false),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" })
    .defaultNow()
    .$onUpdate(() => new Date()),
});

//select schema record
export const selectTasksSchema = createSelectSchema(tasks);

// create task schema
export const insertTasksSchema = createInsertSchema(tasks, {
  name: z.string().min(3).max(500),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// update tasks schema
export const updateTasksSchema = insertTasksSchema.partial();

// id param schema
export const idParamsSchema = createIdParamsSchema("id");
