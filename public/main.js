import {
   makeCard
} from "./news.js";

function sendAjax(url, data) {
   let dataForm = {
      'value': data,
   }
   let dataToSend = JSON.stringify(dataForm);
   const xhr = new XMLHttpRequest();
   xhr.open('POST', url);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(dataToSend);

   xhr.addEventListener('load', function () {
      let result = xhr.responseText;
      result = JSON.parse(result);
      result.forEach(makeCard);
      //document.querySelector(".result").innerHTML = result.email;
   })
}

function init() {
   document.querySelector('.search_btn').addEventListener('click', () => {
      const inputData = document.querySelector('.search_target').value;
      sendAjax('http://localhost:3000/news/naver_news', inputData);
   })
}


init()