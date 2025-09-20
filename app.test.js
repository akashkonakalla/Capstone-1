// app.test.js
const request = require("supertest");
const app = require("./app");

describe("App Endpoints", () => {
  it("should return ok on /health", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
