const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    try {
        req.createdJWT = jwt.sign({_id: req._id}, secret, {expiresIn: "4h"});
        console.log(req.createdJWT);
        next();
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message: error.message, error: error});
    }
}