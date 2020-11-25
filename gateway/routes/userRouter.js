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
        res.json({token: req.createJWT});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})