import request from "supertest";
import { expect, it } from "@jest/globals";
import app from "../app.js";
import { pool } from "../db/index.js";

afterAll(() => {
  // function to run after all tests
  pool.end();
});
describe(`should return the data for the subject called React`, () => {
  it("should return the correct status code 200", async () => {
    const response = await request(app).get("/api/v1/subject?search=React");
    expect(response.status).toStrictEqual(200);
  });

  it("should return the correct payload structure", async () => {
    const response = await request(app).get("/api/v1/subject?search=React");
    expect(response.body).toStrictEqual({ success: true, payload: expect.any(Object)})
  });
});
