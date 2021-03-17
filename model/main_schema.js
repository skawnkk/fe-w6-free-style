const mongoose = require('mongoose');

const {
   Schema
} = mongoose;


var NewsSchema = new Schema({
   title: String,
   href: String,
   send_date: {
      type: Date,
      default: Date.now
   }
}, {
   writeConcern: {
      j: true,
      witemout: 1000
   }
});


module.exports = mongoose.model('news', NewsSchema);