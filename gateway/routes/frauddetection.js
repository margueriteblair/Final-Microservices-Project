const baseURL = process.env.ML_SERVER_BASE
const {default: axios} = require("axios");
const express = require("express")
const router = express.Router();

router.post("/", async(req, res) => {
    const {action, data} = req.body;
    try {
        switch(action) {
            case "analyzeData":
                res.json(await runFraudDetection());
                break;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
})