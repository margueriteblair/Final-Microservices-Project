const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10); //ten is the default either way
        const oldPassword = req.sanitized.password;
        const encryptedPassword = await bcrypt.hash(oldPassword, salt);
        req.sanitized.password = encryptedPassword;
        next();
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message: error.message});
    }
}