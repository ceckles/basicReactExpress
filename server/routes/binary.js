const express = require("express");
const router = express.Router();

// Convert string to binary
router.get("/:string", (req, res) => {
  const { string } = req.params;
  const binary = string
    .split("")
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ");
  res.send({ binary });
});

module.exports = router;
