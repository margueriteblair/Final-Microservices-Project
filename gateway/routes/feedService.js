const express = require('express')
const router = express.Router();

router.get('/feeds', (req, res) => {
    res.send(req.path + " called")
})

router.get('/feeds/:hashtag', (req, res) =>{
    res.send(req.path + " called")
})

router.post('/feeds', (req, res) => {
    res.send(req.path + " called")
})

module.exports = router;