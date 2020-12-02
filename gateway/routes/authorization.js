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
        if (response.errors) throw response.errors;
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

handleUserPost = async (body) => {
    try {
        const res = await axios.post(`${baseURL}/api/users`, body);
        console.log(res.data);
        return res;
    } catch (error) {
        res.status(400).json(error);
    }
};

handleUserLogin = async (body) => {
    try {
        const res = await axios.post(`${baseURL}/api/users/login`, body);
        return res;
    } catch (error) {
        res.status(400).json(error);
    }
};

handleUserLogout = async (body) => {
    try {

    } catch (error) {
        res.status(400).json(error);
    }
}


module.exports = router;