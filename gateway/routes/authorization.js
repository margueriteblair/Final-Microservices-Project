const express = require("express")
const router = express.Router();
const baseURL = process.env.AUTH_SERVER_BASE
const {default: axios} = require("axios");

router.post("/", async (req, res) => {
    const {action, data} = req.body;
    try {
        switch(action) {
            case "createUser":
                res.send(handleUserPost(data));
                break;
            case "loginUser":
                res.send(handleUserLogin(data));
                break;
            case "logout":
                res.send(handleUserLogout(data));
            default:
                return res.status(404).json({errors: {action: "Invalid action"}});
        }
        if (res.errors) throw res.errors;
        res.json(res.data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

handleUserPost = async (body) => {
    try {
        await axios.post(`${baseURL}/api/users`, body);
        // console.log(res.data);
        return "success";
    } catch (error) {
        throw error;
    }
};

handleUserLogin = async (body) => {
    try {
        await axios.post(`${baseURL}/api/users/login`, body);
        return "success";
    } catch (error) {
        throw error;
    }
};

handleUserLogout = async (body) => {
    try {

    } catch (error) {
        res.status(400).json(error);
    }
}


module.exports = router;