const express = require("express")
const router = express.Router();
const baseURL = process.env.AUTH_SERVER_BASE
const {default: axios} = require("axios");

router.post("/", async (req, res) => {
    const {action, data} = req.body;
    try {
        switch(action) {
            case "createUser":
                res.json(await handleUserPost(data));
                break;
            case "loginUser":
                res.send(await handleUserLogin(data));
                break;
            case "logout":
                res.send(await handleUserLogout(data));
                break;  
            case "registerProfile":
                res.send(await registerProfile(req));
                break;
            case "getAllUsers":
                res.json(await getAll(req));
                break;
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

handleUserPost = async (data) => {
    try {
        let response = await axios.post(`${baseURL}/user`, data);
        console.log(response);
        return "Successfully created new user!";
    } catch (error) {
        throw error;
    }
};

handleUserLogin = async (body) => {
    try {
        await axios.put(`${baseURL}/user`, body);
        return "Success! User logged in!";
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

const registerProfile = async (req) => {
    const token = req.header('x-auth-token');

    if (token) {
        try {
            const res = await axios.post(
                `${baseURL}/api/profiles`,
                req.body.profileData,
                {
                    headers: {'x-auth-token': token}
                }
                )
                return res;
        } catch (error) {
            console.error(error.message);
            return error.message;
        }
    }
}

const getAll = async () => {
    try {
        let response = await axios.get(`${baseURL}/users`);
        console.log(response);
        return "fetched all data, check console for output"
    } catch (error) {
        return error.message;
    }
}


// const getAll = async (data) => {
//     const token = req.header('x-auth-token');
  
//     if (token) {
//       try {
//         const response = await axios.get(`${authServer}/api/profiles`, {
//           headers: { 'x-auth-token': token },
//         });
  
//         return response;
//       } catch (error) {
//         console.error(error.response.data);
//         return error.response.data;
//       }
//     } else {
//       return { errors: { msg: 'No token, authorization denied' } };
//     }
// }


module.exports = router;