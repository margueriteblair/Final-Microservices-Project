const express = require("express")
const router = express.Router();
// const config = require("../config/default");
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
                response = await handleProfilePost(
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

handleUserPost = async (body) => {
    try {
        const res = await axios.post(`${config.authServer}/api/users`, body);
        console.log(res.data);
        return res;
    } catch (error) {
        res.status(400).json(error);
    }
};

handleUserLogin = async (body) => {
    try {
        const res = await axios.post(`${config.authServer}/api/users/login`, body);
        return res;
    } catch (error) {
        res.status(400).json(error);
    }
};

handleProfilePost = async(body, authToken) => {
    try {
        res = await axios.post(`${config.authServer}/api/profiles`, body, {
            headers: {"x-auth-token": authToken}
        })
        return res;
    } catch (error) {
        res.json(400).json(error);
    }
}

module.exports = router;