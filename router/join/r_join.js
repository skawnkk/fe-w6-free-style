var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) { //root이므로 /main=>/으로 수정.
   console.log('join_modulized.')
   res.sendFile(path.join(__dirname, '../../public/join.html'))
})

router.post('/', function (req, res) { //root이므로 /main=>/으로 수정.
   console.log(req.body)
   res.send('post')
})

module.exports = router;