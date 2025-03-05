import { cors } from "hono/cors";

import index from "./src/routes/index.route.ts";
import createApp from "./src/lib/create-app.ts";
import configuireOpenAPI from "./src/lib/openapi.config.ts";
import tasks from "./src/routes/tasks/tasks.index.ts";

const app = createApp();
configuireOpenAPI(app);

// Allow dynamic origin based on the environment variable
const allowedOrigin = Deno.env.get("ALLOWED_ORIGIN");

// Use CORS middleware
app.use(cors({ origin: allowedOrigin }));

const routes = [index, tasks];

routes.forEach((router) => {
  app.route("/", router);
});

export default app;
