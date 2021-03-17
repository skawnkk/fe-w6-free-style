var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

const request = require('request');
const cheerio = require("cheerio");
const News = require('../../model/main_schema');

//const resultArr = [];

router.get('/naver_news', async (req, res) => {
   try {
      const news = await News.find();
      res.json(news)
   } catch (err) {
      res.json({
         message: err
      })
   }
})


router.post('/naver_news', async (req, res) => {
   console.log('in')

   try {
      var word = encodeURI("방탄소년단");
      const url = `https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=qkd&qdt=0&ie=utf8&query=${word}`;
      const dataToSave = new News({
         title: $title,
         href: $href,
      })
      request(url, async function (err, _, body) {
         const $ = cheerio.load(body)

         for (let i = 0; i < $('.list_news .bx').length; i++) {
            const $target = $('.list_news .bx').find('.news_wrap .news_area > a');
            const $href = $target[i].attribs.href;
            const $title = $target[i].attribs.title;
            const resultArr = await dataToSave.save();
         }
         res.send(resultArr)
      })
   } catch (err) {
      res.json({
         message: err
      })
   }
})
module.exports = router;