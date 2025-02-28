import { config } from "dotenv";
import app from "./app.ts";
// Load environment variables
const env = config();
const port = env.PORT;

//start deno server
Deno.serve({ port: port }, app.fetch);
