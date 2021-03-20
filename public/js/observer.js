import {
   _
} from "./utill.js";
import {
   dragAndDrop
} from "./drag.js";
import {
   commentCtrl
} from "./comment.js";

export const observeNode = () => {
   const mutationTarget = _.$('.naver_news');
   const observer = new MutationObserver(() => {
      dragAndDrop();
      commentCtrl();
   })

   const config = {
      childList: true
   };
   observer.observe(mutationTarget, config);
}