const express = require("express");
const router = express.Router();

// Health check
router.get("/", (req, res) => {
  res.send({ status: "OK" });
});

module.exports = router;
