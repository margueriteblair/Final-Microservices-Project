const mongoose = require("mongoose");
const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
    try {
        const {password, credential} = req.body; //for the login, the user will only provide a password and either their username or email
        const field = validator.isEmail(credential) ? "email" : "username";

        const foundUser = await User.findOne({field})

    } catch (err) {
        res.status(500).json({message: err.message});
    }
}