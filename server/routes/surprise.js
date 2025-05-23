const express = require("express");
const router = express.Router();

// Health check
router.get("/", (req, res) => {
    //route to return a random surprise
    const surprises = [
        "You are amazing!",
        "Keep up the great work!",
        "You are doing fantastic!",
        "Believe in yourself!",
        "You are a star!",
        "You make a difference!",
        "You are loved!",
        "You are capable of great things!",
        "You are unique and special!",
        "You have the power to change the world!"
    ]; 
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    console.log(`Random surprise generated: ${randomSurprise}`);
    res.send({ status: "OK", surprise: randomSurprise });
});

module.exports = router;