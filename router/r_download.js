var express = require('express');
var app = express();
var router = express.Router();
var fetch = require('node-fetch');

router.post('/', async (req, res) => {
   
   let responseData = req.body.searchterm;
   const link = 'https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&suggestion-type=KEYWORD&prefix=';
   const data = await fetch(new URL(link+responseData).href);
   const {suggestions} = await data.json();
   let result = suggestions.reduce((acc,curr)=>[...acc,curr.value],[])
   res.json(result);
})

module.exports = router;