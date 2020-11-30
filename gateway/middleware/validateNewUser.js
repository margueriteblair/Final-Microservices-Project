const mongoose = require("mongoose");
const User = require("../models/User");
const validator = require("validator");

module.exports = async (req, res, next) => {
    try {
        const {email, username, password} = req.body;
        const errorsList = [];

        if (email === undefined || email.trim().length === 0) {
            errorsList.push({key: "email", error: "Email required."});
        } else if (email !== undefined && !validator.isEmail(email)) {
            errorsList.push({key: "email", error: "Must be a valid email address."});
        } else {
            const emailExist = await User.findOne({email: email}) !== null;
            if (emailExist) errorsList.push({key: "email", error: "Email is already in use."})
        }

        if (username === undefined || username.trim().length == 0) {
            errorsList.push({key: "username", error: "Username is required."});
        } else {
            const usernameExist = await User.findOne({username: username}) !== null;
            if (usernameExist) {
                errorsList.push({key: "username", error: "Username is already in use."})
            }
        }

        if (password === undefined || password.trim().length === 0) {
            errorsList.push({key: "password", error: "Password is required."});
        } else if (password !== undefined && password.length < 7) {
            errorsList.push({key: "password", error: "Password did not meet requirements"});
        }

        if (errorsList.length > 0) {
            res.status(400).json({"validation errors": errorsList});
        } else {
            const cleanUserData = {
                username: username.trim(),
                email: email.trim(),
                password: password.trim()
            }
            req.sanitized = cleanUserData;
            next();
        }
        
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}