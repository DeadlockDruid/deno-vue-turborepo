import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

import * as schema from "../database/schema/index.ts";

const { Pool } = pg;
const pool = new Pool({
  connectionString: Deno.env.get("DATABASE_URL"),
  max: 10,
});

// Instantiate Drizzle client with pg driver and schema.
const db = drizzle({ client: pool, schema });

export default db;
