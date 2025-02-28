import index from "./src/routes/index.route.ts";
import createApp from "./src/lib/create-app.ts";
import configuireOpenAPI from "./src/config/open-api.config.ts";
import tasks from "./src/routes/tasks/tasks.index.ts";
import { CONSTANTS } from './src/utils/helpers/constant.ts';

const app = createApp();
configuireOpenAPI(app);

const routes = { "/": index, "/tasks": tasks };

Object.entries(routes).forEach(([path, router]) => {
  app.route(path, router);
});

console.log("\n Final Registered Routes (app.ts): ");

app.routes.forEach(({ method, path }) => {
  console.log(`${method.toUpperCase()} ${path}`);
});
// Add a route to handle "/favicon.ico"
app.get("/favicon.ico", () => {
  return new Response(null, { status: CONSTANTS.STATUS_CODES.NO_CONTENT }); // 204 No Content
});

export default app;
