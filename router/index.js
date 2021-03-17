var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var news_router = require("./crawl/naver")

router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../index.html'))
})

router.use('/news', news_router)

module.exports = router;