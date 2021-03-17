const mongoose = require('mongoose');

const {
   Schema
} = mongoose;

var EmailSchema = new Schema({
   email: String,
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

module.exports = mongoose.model('e-mail', EmailSchema);
//export const email = mongoose.model('e-mail', emailSchema);
//model은 데이터베이스에서 데이터를 읽고, 생성하고, 수정하는프로그래밍 인터페이스를 정의합니다.
//'e-mail'->'e-mails' 복수형으로 전환하여 콜렉션 네이밍함.