var express = require('express');
var app = express();
var router = express.Router();

const request = require('request');
const cheerio = require("cheerio");
const News = require('../model/main_schema');

console.log('linked')

router.post('/save', (req, res) => {
   console.log("??", req.body)
})

module.exports = router;