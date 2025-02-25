import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import  app  from "../app.ts";

describe("Hono App Endpoints", () => {
  it("GET / should return correct JSON response ", async () => {
    const response = await app.fetch(
      new Request("http://localhost/api", { method: "GET" }),
    );
    const text = await response.text();
    expect(response.status).toBe(200);
  });

});
