const express = require('express')
const router = express.Router();
const apiAdapter = require("./apiAdapter")

const BASE_URL = "http://localhost:8088"
const api = apiAdapter(BASE_URL)

router.get('/feeds', (req, res) => {
    api.get(req.path).then(res => {
        res.send(res.data);
    })
})

router.get('/feeds/:hashtag', (req, res) =>{
    api.get(req.path).then(res => {
        res.send(res.data);
    })
})

router.post('/feeds', (req, res) => {
    api.post(req.path, req.body).then(res => {
        res.send(res.data);
    })
})

module.exports = router;