const express = require('express');
const apiAdapter = require('./apiAdapter');
const router = express.Router()

const BASE_URL = "http://localhost:8000"
const api = apiAdapter(BASE_URL)

router.get('/hashtags', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })
  
  router.get('/hashtags/:name', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
  })

module.exports = router