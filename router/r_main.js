var express = require('express');
var app = express();
var router = express.Router()
var path = require('path')//상대경로


router.get('/', function(req,res){ //root이므로 /main=>/으로 수정.
   console.log('router_modulized.')
   res.sendFile(path.join(__dirname, '../public/main.html'))
})

module.exports = router;