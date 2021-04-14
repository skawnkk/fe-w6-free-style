import {
   _
} from "./utill.js";

export const refreshWindow = () => {
   const pasteWindow = _.$('.naver_news');
   pasteWindow.innerHTML = '';
}