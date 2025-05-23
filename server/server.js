const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");

const greetingRoutes = require("./routes/greeting");
const binaryRoutes = require("./routes/binary");
const statusRoutes = require("./routes/status");
const numberRoutes = require("./routes/number");

const app = express();
const port = process.env.PORT || 3001;
const baseURL = process.env.BASE_URL || "http://localhost";

// === Logging Setup ===

// Ensure logs directory exists
const logDirectory = path.join(__dirname, "logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// Create a rotating write stream (daily rotation, keep 30 days)
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: logDirectory,
  maxFiles: 30, // keep logs for 30 days
  compress: "gzip", // compress rotated files
});

// Setup morgan to use the rotating file stream
app.use(morgan("combined", { stream: accessLogStream }));

// === Middleware ===
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// === Routes ===
app.use("/api/greeting", greetingRoutes);
app.use("/api/binary", binaryRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/number", numberRoutes);

// === Server Start ===
app.listen(port, () => {
  console.log(`Listening on port ${baseURL}:${port}`);
});
