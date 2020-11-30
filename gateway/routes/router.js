const express= require("express");
const router = express.Router();
const feedService = require("./feedService");
const hashtagService = require('./hashtagService');

router.use((req, res, next) => {
    console.log("Called path: ", req.path)
    next();
})

router.use(feedService)
router.use(hashtagService)

module.exports = router;