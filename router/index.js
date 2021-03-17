var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


var search_router = require("./r_search")
var download_router = require("./r_download")
var news_router = require("./crawl/naver")


router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../index.html'))
})


router.use('/search', search_router)
router.use('/download', download_router)
router.use('/news', news_router)

module.exports = router;