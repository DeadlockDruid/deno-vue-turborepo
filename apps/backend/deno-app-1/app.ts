import index from "./src/routes/index.route.ts";
import createApp from "./src/lib/create-app.ts";
import configuireOpenAPI from "./src/config/open-api.config.ts";
import tasks from "./src/routes/tasks/tasks.index.ts";

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

export default app;
