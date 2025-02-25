import { expect } from "jsr:@std/expect";
import { serve } from "https://deno.land/std@0.208.0/http/server.ts";
import app from "../app.ts";

let server: Deno.HttpServer | null = null;

Deno.test("Hono App Endpoints", async (t) => {
  server = serve(app.fetch, { port: 8000 });

  await t.step("GET / should return correct JSON response ", async () => {
    const response = await app.fetch(
      new Request("http://localhost/api", { method: "GET" }),
    );
    const text = await response.text();
    expect(response.status).toBe(200);
  });

  await t.step("GET /list-tasks should return List of Tasks", async () => {
    const response = await fetch("http://localhost:8000/list-tasks", {
      method: "GET",
    });
    expect(response.status).toBe(200);
  });
  let createdTaskId: string;
  await t.step("POST /create-tasks should create a new task", async () => {
    const newTask = { name: "Test Task12", done: false };

    const response = await fetch("http://localhost:8000/create-tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    expect(response.status).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.name).toBe(newTask.name);
    // Store task ID for PATCH & DELETE
    createdTaskId = responseBody.data.id;
  });
  await t.step("PATCH /tasks/:id should update a task", async () => {
    const updateData = { name: "test", done:"true" };

    const response = await fetch(`http://localhost:8000/tasks/${createdTaskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    const responseBody = await response.json();
    expect(response.status).toBe(200);
    expect(responseBody.data.name).toBe("test");
    expect(responseBody.data.done).toBe(true);
  });
  await t.step("DELETE /tasks/:id should remove a task", async () => {
    const response = await fetch(`http://localhost:8000/tasks/${createdTaskId}`, {
      method: "DELETE",
    });

    expect(response.status).toBe(204); // No Content
  });

  if (server) {
    Deno.exit(0);
  }
});
