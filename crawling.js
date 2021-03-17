const fetch = require('node-fetch');
const jsdom = require("jsdom-global")
const request = require('request')
const cross_fetch = require('cross-fetch');
const axios = require("axios");
const cheerio = require("cheerio");
const client = require('cheerio-httpcli')
var word = encodeURI("방탄소년단");
const url = `https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=qkd&qdt=0&ie=utf8&query=${word}`

request(url, function (err, res, body) {

   const $ = cheerio.load(body)

   for (let i = 0; i < $('.list_news .bx').length; i++) {
      const $target = $('.list_news .bx').find('.news_wrap .news_area > a');
      const $href = $target[i].attribs.href;
      const $title = $target[i].attribs.title;
      //console.log($href, $title);
   }

})

/*
const crawl = async ({
   url
}) => {
   return await axios.get(url)

}

crawl({
   url: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="
}).then(html => {
   let bxList = [];
   const $ = cheerio.load(html.data)
   const $bodyList = $('ul.list_news').children('li.bx')

   $bodyList.each(function (i, elem) {

      bxList[i] = {
         image_url: $(this).find('a').attr('href'),
         // url: $(this).find('strong.news-tl a').attr('href'),
         // image_url: $(this).find('p.poto a img').attr('src'),
         // image_alt: $(this).find('p.poto a img').attr('alt'),
         // summary: $(this).find('p.lead').text().slice(0, -11),
         // date: $(this).find('span.p-time').text()
      };
   });

   const data = bxList.filter(n => n.image_url);
   return data;
})
//.then(res => console.log(res));


module.exports = fetch;*/