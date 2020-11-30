const mongoose = require("mongoose");
const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
    try {
        const {password, credential} = req.body; //for the login, the user will only provide a password and either their username or email
        const field = validator.isEmail(credential) ? "email" : "username";

        const query ={}
        query[field] = credential.trim();

        const foundUser = await User.findOne(query, {password: 1, email: 1, username: 1});
        if (foundUser === null) {
            res.status(400).json({message: "Email and/or password don't match. No user found."});
            return;
        }
        const passwordMatches = bcrypt.compare(password, foundUser.password);
        if (!passwordMatches) {
            res.status(400).json({message: "Email and/or password don't match. No user found."});
            return;
        }
        req.userId = foundUser._id;
        req.username = foundUser.username;
        next();

    } catch (err) {
        res.status(500).json({message: err.message, customMessage: "Validate login failed"});
    }
}