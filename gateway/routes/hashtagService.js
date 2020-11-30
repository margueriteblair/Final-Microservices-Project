const express = require('express');
const router = express.Router()

router.get('/hashtags', (req, res) => {
    res.send(req.path + " called")
})

router.get('/hashtags/:name', (req, res) => {
    res.send(req.path + " called")  
})

module.exports = router