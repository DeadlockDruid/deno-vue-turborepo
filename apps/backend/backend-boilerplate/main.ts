import app from "./app.ts";

const port = Number(Deno.env.get("PORT")) || 8000;

//start deno server
Deno.serve({ port: port }, app.fetch);
