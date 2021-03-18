const mongoose = require('mongoose');

const {
   Schema
} = mongoose;


var NewsSchema = new Schema({
   search: String,
   title: String,
   href: String,
   send_date: {
      type: Date,
      default: Date.now
   }
}, {
   timestamps: true
}, {
   writeConcern: {
      w: 'majority',
      fsync: true,
      j: true,
      witemout: 2500
   }
});


module.exports = mongoose.model('news', NewsSchema);