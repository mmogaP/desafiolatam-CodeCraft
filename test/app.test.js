<<<<<<< HEAD
const request = require('supertest');
const app = require('../app.js');


describe('API Tests', () => {
  it('should return a list of tasks', async () => {
    const res = await request(app).get('/tasks');
=======
const request = require("supertest");
const app = require("../app");

describe("API Tests", () => {
  it("should return a list of users", async () => {
    const res = await request(app).get("/tasks");
>>>>>>> f613513b1d8aa77f7bf0e21bb4c02a266dc92f96
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
  });

<<<<<<< HEAD
  it('should return a single task', async () => {
    const res = await request(app).get('/tasks/2');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Task 2');
=======
  it("should return a single user", async () => {
    const res = await request(app).get("/tasks/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Task 1");
>>>>>>> f613513b1d8aa77f7bf0e21bb4c02a266dc92f96
  });
});
