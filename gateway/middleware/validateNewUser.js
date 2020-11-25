const mongoose = require("mongoose");
const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
    try {
        const {email, username, password} = req.body;
        const errorsList = [];

        if (email === undefined || email.trim().length === 0) {
            errorsList.push({key: "email", error: "email required"});
        }
        next();
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}