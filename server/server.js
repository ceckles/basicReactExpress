var cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const baseURL = process.env.BASE_URL || "http://localhost";

//add corse to allow cross-origin requests
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//listen to requests on port 3001
app.listen(port, () => console.log(`Listening on port ${baseURL}:${port}`));

//add get route to return greeting
app.get("/api/greeting", (req, res) => {
  console.log("API Triggered");
  res.send({ hello: "Hello World! from the server" });
});

//add health check route to return status
app.get("/api/status", (req, res) => {
  res.send({ status: "OK" });
} );  
