const User = require("../models/User");
const express = require("express");
const passwordEncryption = require("../middleware/passwordEncryption");
const validateLogin = require("../middleware/validateLogin");
const createJWT = require("../middleware/createJWT");
const validateUser = require("../middleware/validateNewUser");

const router = express.Router();

router.patch("/login", validateLogin, createJWT, (req, res) => {
    console.log(req.body);
    const {email, username, password} = req.body;
    try {
        console.log("good job????")
        res.status(200).json({token: req.createdJWT, message: "woohooo!"});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post("/register", validateUser, passwordEncryption, async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({message: "success in creating new user!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;