const mongoose = require('mongoose');

const {
   Schema
} = mongoose;


var NewsSchema = new Schema({
   search: String,
   title: String,
   href: String,
   img: String,
   desc: String,
   comment: {
      type: String,
      default: ''
   },
   keep: {
      type: Boolean,
      default: false
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