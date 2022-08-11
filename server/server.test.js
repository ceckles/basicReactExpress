const axios = require("axios");

// useing axios to make a get request to the server greeting
// endpoint and validate the response and is type of json
describe("GET Greeting Endpoint", () => {
  test("Getting Proper Greeting response", async () => {
    const response = await axios.get("http://localhost:3001/api/greeting");
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ greeting: "Hello World! from the server" });
  });
});

// using axios make a get request to the server greeting endpoint
// passing name and validate the response
describe("GET Greeting Endpoint with name", () => {
  test("Getting Proper Greeting response", async () => {
    const response = await axios.get("http://localhost:3001/api/greeting/John");
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ greeting: "Hello John! from the server" });
  });
});

// ussing axios to make a get request to the server status endpoint and validate the response
describe("GET Status Endpoint", () => {
  test("server is running", async () => {
    const response = await axios.get("http://localhost:3001/api/status");
    expect(response.data).toEqual({ status: "OK" });
  });
});
