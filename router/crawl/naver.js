var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

const request = require('request');
const cheerio = require("cheerio");
const News = require('../../model/main_schema');


const resultArr = [];

router.get('/naver_news', async (req, res) => {
   console.log(res)
   try {
      const news = await News.find();
      console.log(news)
   } catch (err) {
      res.json({
         message: err
      })
   }
})

router.post('/naver_news', (req, res) => {
   console.log('in')
   var word = encodeURI(req.body.searchTarget);
   const url = `https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=qkd&qdt=0&ie=utf8&query=${word}`;

   try {
      request(url, function (err, _, body) {
         const $ = cheerio.load(body)
         for (let i = 0; i < $('.list_news .bx').length; i++) {
            const $target = $('.list_news .bx').find('.news_wrap .news_area > a');
            const $href = $target[i].attribs.href;
            const $title = $target[i].attribs.title;

            resultArr.push([req.body.searchTarget, $title, $href])
         }
         makeCard(resultArr)
         //res.send(resultArr)

         for (let i = 0; i < resultArr.length; i++) {
            const news = new News({
               search: resultArr[i][0],
               title: resultArr[i][1],
               href: resultArr[i][2],
               //date: Date.now() -> default
            });
            news.save();
         }
      })
   } catch (err) {
      res.json({
         message: err
      })
   }
})


module.exports = router;