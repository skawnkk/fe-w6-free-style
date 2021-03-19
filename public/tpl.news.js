import {
   _
} from "./utill.js";
import {
   black,
   white
} from "./img/bookmark.js";

export function makeCard(arr) {
   const bookmark = (arr.keep === true) ? black : white;
   const comment = (arr.comment !== '') ? arr.comment : '◌ Double click here to memo ◌';
   const paste_section = _.$('.naver_news');
   const tpl =
      `<div class="card_tpl">
         <div class="clearfix">
            ${bookmark}
         </div>
         <a href="${arr.link}">
            <div><img src="${arr.img}"></div>
            <div>${arr.title}</div>
         </a>
         <div class="desc">${arr.desc}</div>
         <div class="memo">
          <div class="show_memo">${comment}</div>
         </div>
        
      </div>`
   paste_section.insertAdjacentHTML('AfterBegin', tpl);
}