var express = require('express');
var app = express();
var router = express.Router();

const request = require('request');
const cheerio = require("cheerio");
const News = require('../model/main_schema');


router.get('/', async (req, res) => {
   const keepData = await News.find({});
   res.json(keepData);
})

module.exports = router;