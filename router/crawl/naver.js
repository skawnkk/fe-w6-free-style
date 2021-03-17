var express = require('express');
var app = express();
var router = express.Router();

const request = require('request');
const cheerio = require("cheerio");
const News = require('../../model/main_schema');

//*DB받아오기 : 아직 비활성.
// router.get('/naver_news', async (req, res) => {
//    console.log(res)
//    try {
//       const news = await News.find();
//    } catch (err) {
//       res.json({
//          message: err
//       })
//    }
// })

router.post('/naver_news', (req, res) => {
   var word = encodeURI(req.body.value);
   const url = `https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=qkd&qdt=0&ie=utf8&query=${word}`;
   const resultArr = [];
   try {
      request(url, function (err, _, body) {
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
            console.log(redesignDesc)

            const obj = {
               'target': req.body.value,
               'title': $bodyInfo[i].attribs.title,
               'link': $bodyInfo[i].attribs.href,
               'img': $bodyImg[i].attribs.src,
               'desc': redesignDesc
            };
            resultArr.push(obj);
         }
         res.json(resultArr)

         //*DB작업:아직비활성
         // for (let i = 0; i < resultArr.length; i++) {
         //    const news = new News({
         //       search: resultArr[i][0],
         //       title: resultArr[i][1],
         //       href: resultArr[i][2],
         //       //date: Date.now() -> default
         //    });
         //    news.save();
         // }
      })
   } catch (err) {
      res.json({
         message: err
      })
   }
})


module.exports = router;