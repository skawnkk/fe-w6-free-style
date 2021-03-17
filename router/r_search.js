var express = require('express');
var app = express();
var router = express.Router();
var path = require('path')

router.post('/', (req, res)=>{
   res.render(path.join(__dirname,'../views/search.ejs'),{'searchterm': req.body.search})
   //data+html=>client
})


module.exports = router;