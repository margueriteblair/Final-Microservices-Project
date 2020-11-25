const mongoose = require("mongoose");
const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
    try {
        const {password, credential} = req.body; //for the login, the user will only provide a password and either their username or email
        const field = validator.isEmail(credential) ? "email" : "username";

        const foundUser = await User.findOne({field: credential}, {password: 1});

        if (foundUser === null) return res.status(400).json({message: "Email and/or password don't match."});

        const passwordMatches = bcrypt.compare(password, foundUser.password);

        if (!passwordMatches) return res.status(400).json({message: "Email and/or password don't match."})

        req.userId = foundUser._id;

        next();

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}