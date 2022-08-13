const cors = require("cors");
const express = require("express");

const app = express();
const port = process.env.PORT || 3001;
const baseURL = process.env.BASE_URL || "http://localhost";

// corse to allow cross-origin requests
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Listen to requests on port 3001
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${baseURL}:${port}`));

// Get route to return greeting
app.get("/api/greeting", (req, res) => {
  // console.log("API Triggered");
  res.send({ greeting: "Hello World! from the server" });
});

// Get route to return a greeting to the user with their name
app.get("/api/greeting/:name", (req, res) => {
  // console.log("API Triggered");
  res.send({ greeting: `Hello ${req.params.name}! from the server` });
});

//Get route to convert string to binary
app.get("/api/binary/:string", (req, res) => {
  // console.log("API Triggered");
  const { string } = req.params;
  const binary = string
    .split("")
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ");
  res.send({ binary });
});

// health check route to return status
app.get("/api/status", (req, res) => {
  res.send({ status: "OK" });
});
