const jwt = require("jsonwebtoken");

function generateToken(user) {
    if (!user) return null;

    let u = {
        userId: user._id,
        username: user.username,
        email: user.email,
        password: user.password
    }

    return jwt.sign(u, process.env.JWT_SECRET, {expiresIn: "24h"});
}