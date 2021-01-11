const baseURL = process.env.PROCESSING_SERVER_BASE
const {default: axios} = require("axios");
const express = require("express");
const { json } = require("body-parser");
const router = express.Router();

router.post("/", (req, res) => {
    const {action, data} = req.body;
    try {
        switch(action) {
            case "loadData":
                res.json(await loadFinancialData())
                break;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
})

loadFinancialData = async () => {
    try {
        let response = await axios.post(`${PROCESSING_SERVER_BASE}/load`);
        return response.data;
    } catch (error) {
        console.error(error)
        res.status(500).json(error);
    }
}