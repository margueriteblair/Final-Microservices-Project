//automatically looks for index.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is the root of the application babyyyy! We in the middleware!")
})

router.get("/:apiName", (req, res) => {
    console.log(req.params.apiName);
    res.send(req.params.apiName);
})


module.exports = router;