const express = require("express");
const router = express.Router();

// Health check
router.get("/", (req, res) => {
    //return a random number 1-100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number generated: ${randomNumber}`);
    res.send({ status: "OK", randomNumber });
});

module.exports = router;