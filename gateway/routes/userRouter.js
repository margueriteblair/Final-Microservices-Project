const User = require("../models/User");
const express = require("express");
const passwordEncryption = require("../middleware/passwordEncryption");
const validateLogin = require("../middleware/validateLogin");
const createJWT = require("../middleware/createJWT");
const validateUser = require("../middleware/validateNewUser");

const router = express.Router();

router.patch("/login", validateLogin, createJWT, (req, res) => {
    const {email, username, password} = req.body;
    try {
        res.status(200).json({token: req.createdJWT, username: req.username});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post("/register", validateUser, passwordEncryption, async (req, res) => {
    try {
        await User.create(req.sanitized);
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
})

module.exports = router;