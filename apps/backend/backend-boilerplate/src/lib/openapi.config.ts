import { apiReference } from "scalar";

import type { AppOpenAPI } from "./types";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: Deno.env.get("OPEN_API_VERSION") || "3.1.1",
    info: {
      version: Deno.env.get("API_VERSION") || "v1",
      title: "Boilerplate API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    }),
  );
}
