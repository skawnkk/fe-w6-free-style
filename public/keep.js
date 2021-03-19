import {
   _
} from "./utill.js";
import {
   makeCard
} from "./tpl.news.js";
import {
   sendAjax
} from "./send.ajax.js";

export const loadKeepData = () => {
   const loadKeepBtn = _.$('.mykeep');
   loadKeepBtn.addEventListener('click', () => {
      const url = 'http://localhost:3000/keep';
      sendAjax('GET', url, null, makeCard);
   })
}