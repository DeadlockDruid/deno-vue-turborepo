import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schema/task-schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres:password@localhost:5432/mercy_db",
  },
});
