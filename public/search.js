import {
   _
} from "./utill.js";
import {
   makeCard
} from "./tpl.news.js";
import {
   sendAjax
} from "./send.ajax.js";



export const searchEvent = () => {
   const searchWindow = _.$('.search_window');
   const searchBtn = _.$('.search_btn');
   let timer;

   searchWindow.addEventListener('input', () => {
      if (searchWindow.value === '') searchBtn.classList.add('hide');
      else {
         if (timer) clearTimeout(timer);
         timer = setTimeout(() => searchBtn.classList.remove('hide'), 600);
      }
   })

   searchBtn.addEventListener('click', () => {
      const inputData = searchWindow.value;
      const url = 'http://localhost:3000/news/naver_news';
      sendAjax('POST', url, inputData, makeCard);
   })

}