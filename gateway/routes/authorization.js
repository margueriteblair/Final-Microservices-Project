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
                res.send(await registerProfile(data));
                break;
            case "getAllUsers":
                res.json(await getAll(data));
                break;
            case "deleteUser":
                res.json(await deleteUser(data))
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
        return response.data;
    } catch (error) {
        throw error;
    }
};

handleUserLogin = async (body) => {
    try {
        let res = await axios.put(`${baseURL}/user`, body);
        return res.data;
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
        response = response.data;
        return response;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (data) => {
    try {
        let response = await axios.delete(`${baseURL}/user?id=${data.id}`);
        return response.data;
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
// final static String regularExpression = "[a-z]{1,6}\\_?[0-9]{0,4}
// }


module.exports = router;