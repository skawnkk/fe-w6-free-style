var express = require('express');
var app = express();
var router = express.Router();

const request = require('request');
const cheerio = require("cheerio");
const News = require('../../model/main_schema');

router.post('/naver_news', async (req, res) => {
   var word = encodeURI(req.body.value);
   const url = `https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=qkd&qdt=0&ie=utf8&query=${word}`;
   const resultArr = [];
   try {
      request(url, async function (err, _, body) {
         const $ = cheerio.load(body)
         const $target = $('.list_news .bx')
         const $bodyInfo = $target.find('.news_wrap .news_area > a');
         const $bodyDesc = $target.find('.news_wrap > div > div.news_dsc > div > a');
         const $bodyImg = $target.find('.news_wrap > a> img')

         for (let i = 0; i < $target.length; i++) {
            let descArr = [];
            for (let j = 0; j < $bodyDesc[i].children.length; j++) {
               let desc = $bodyDesc[i].children[j].data;
               if (desc === undefined) desc = req.body.value;
               descArr.push(desc);
            }
            const redesignDesc = descArr.reduce((acc, curr) => {
               acc += curr
               return acc
            }, '')
            const obj = {
               'target': req.body.value,
               'title': $bodyInfo[i].attribs.title,
               'link': $bodyInfo[i].attribs.href,
               'img': $bodyImg[i].attribs.src,
               'desc': redesignDesc
            };
            resultArr.push(obj);
         }
         //res.json(resultArr)
         //*DB작업
         for (let i = 0; i < resultArr.length; i++) {
            const news = new News({
               search: resultArr[i].target,
               title: resultArr[i].title,
               href: resultArr[i].link,
               img: resultArr[i].img,
               desc: resultArr[i].desc,
            });
            news.save();
         }

         const targetCard = await News.find({
            search: resultArr[0].target
         })

         res.json(targetCard)
      })
   } catch (err) {
      res.json({
         message: err
      })
   }
})


module.exports = router;