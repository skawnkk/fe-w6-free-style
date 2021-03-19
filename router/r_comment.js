var express = require('express');
var app = express();
var router = express.Router();

const request = require('request');
const cheerio = require("cheerio");
const News = require('../model/main_schema');

router.post('/save', async (req, res) => {

   const {
      targetUrl,
      save,
      comment
   } = req.body.value;

   const filter = {
      href: targetUrl
   }
   const update = {
      keep: save,
      comment: comment
   }

   await News.findOneAndUpdate(filter, update, {
      new: true
   });
})

module.exports = router;