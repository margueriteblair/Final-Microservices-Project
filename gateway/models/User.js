const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        unique: true
    },
    password: {
        type: String,
        minlength: 7,
        required: true
    },
    timestamps: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now();
        }
    },
    email: {
        type: String,
        minlength: 6,
        maxlength: 200,
        unique: true,
        required: true
    },
    emailValidated: {
        type: Boolean,
        default: false
    }

})

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;