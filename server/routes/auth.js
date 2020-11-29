const express = require("express")
const router = express.Router();
const config = require("../config/default");
const axios = require("axios");

router.post("/", async (req, res) => {
    let response;
    try {
        switch(req.body.action) {
            case "postUser":
                response = await handleUserPost(req.body.reqBody);
                break;
            case "loginUser":
                response = await handleUserLogin(req.body.reqBody);
                break;
            case "handleProfilePost":
                response = await handleUserLogin(
                    req.body.reqBody,
                    req.header("x-auth-token")
                );
                break;
            default:
                return res.status(404).json({errors: {action: "invalid action"}});
        }
        if (response.errors) throw response.errors;
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});