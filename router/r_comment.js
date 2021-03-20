var express = require('express');
var app = express();
var router = express.Router();
const News = require('../model/main_schema');

router.post('/save', async (req, res) => {

   const {
      _id,
      save,
      comment
   } = req.body.value;

   const filter = {
      href: _id
   }
   const update = {
      keep: save,
      comment: comment
   }
   console.log("update:", filter, update)
   await News.findByIdAndUpdate(_id, update);
})

module.exports = router;