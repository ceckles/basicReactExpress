const express = require("express");
const router = express.Router();

// Default greeting
router.get("/", (req, res) => {
  res.send({ greeting: "Hello World! from the server" });
});

// Personalized greeting
router.get("/:name", (req, res) => {
  res.send({ greeting: `Hello ${req.params.name}! from the server` });
});

module.exports = router;
