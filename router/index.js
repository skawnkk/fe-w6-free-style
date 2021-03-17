var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var main_router = require("./r_main")
var search_router = require("./r_search")
var download_router = require("./r_download")
var mail_submit_router = require("./email/r_email")
var join_router = require("./join/r_join")
var news_router = require("./crawl/naver")


router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../index.html'))
})

router.use('/main', main_router)
router.use('/search', search_router)
router.use('/download', download_router)
router.use('/email', mail_submit_router)
router.use('/join', join_router)
router.use('/news', news_router)

module.exports = router;