const express = require("express")
const router = express.Router();
const baseURL = process.env.AUTH_SERVER_BASE
const {default: axios} = require("axios");

router.post("/", async (req, res) => {
    const {action, data} = req.body;
    try {
        switch(action) {
            case "createUser":
                try {
                    res.send(await handleUserPost(data));
                } catch (error) {
                    res.status(500).json({message: error.message});
                }
                break;
            case "loginUser":
                res.send(await handleUserLogin(data));
                break;
            case "logout":
                res.send(handleUserLogout(data));
                break;  
            case "registerProfile":
                res.send(registerProfile(req));
                break;
            case "getAllUsers":
                res.send(getAll(req));
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
        return "Success! New user created";
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
        return await axios.get(`${baseURL}/users`);
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