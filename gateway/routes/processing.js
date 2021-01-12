const baseURL = process.env.PROCESSING_SERVER_BASE
const {default: axios} = require("axios");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const {action, data} = req.body;
    try {
        switch(action) {
            case "loadData":
                res.json(await loadFinancialData(data));
                break;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

loadFinancialData = async () => {
    try {
        let response = await axios.get(`${baseURL}/load`);
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

module.exports = router;