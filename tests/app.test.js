import request from "supertest";
import app from "../server.js";

test("GET /api/currencies", async () => {
  const res = await request(app).get("/api/currencies");
  expect(res.statusCode).toBe(200);
});

