const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = async (req, res, next) =>{
    try {
        await User.create(req.sanitized);
        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: error.message});
    }
}