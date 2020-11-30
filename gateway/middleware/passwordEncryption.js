const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {

    try {
        const salt = process.env.SALT;
        const oldPass = req.sanitized.password
        const encryptedPass = await bcrypt.hash((req.sanitized.password), salt);
        req.sanitized.password = encryptedPass
        next();
    } catch (error) {
        console.error(error.message || error)
        res.status(500).json({message: error.message, error: error})
    }
}