import {
   sendAjax
} from "./send.ajax.js";
import {
   _
} from "./utill.js";

const switchBookMark = (wrappingBox) => {
   const bookMark = wrappingBox.children[0];
   const newBookMark = _.create('div');
   newBookMark.innerHTML =
      `<svg aria-label="삭제" class="_8-yf5 " fill="#262626" height="40" viewBox="0 0 48 48" width="40">
      <path
         d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z">
      </path>
      </svg>
      `
   wrappingBox.replaceChild(newBookMark, bookMark)
}

const commentSave = (inputMode) => {

   const saveBtn = inputMode.children[1];
   const showMode = inputMode.parentNode.children[1];

   saveBtn.addEventListener('click', ({
      target
   }) => {
      const wrappingBox = target.closest('.card_tpl');
      switchBookMark(wrappingBox);

      const targetUrl = wrappingBox.children[1].href;
      const comment = target.parentNode.children[0].value;
      showMode.innerText = comment;
      showMode.classList.remove('under');
      inputMode.classList.add('hide');

      const obj = {
         'targetUrl': targetUrl,
         'save': true,
         'comment': comment
      }
      const url = 'http://localhost:3000/comment/save';
      sendAjax(url, obj, null);
   })
}


const switchMode = (target) => {
   const parents = target.parentNode;
   const showMode = target;
   let inputMode;
   if (parents.children.length === 1) {
      inputMode = _.create('div')
      inputMode.className = "input_memo";
      inputMode.innerHTML =
         `<input type="text">
      <div class="save_btn" type="button">save</div>`;
      parents.insertBefore(inputMode, showMode);
      showMode.innerText = ''
   }

   //!이미댓글이 있는 경우에 대한 처리
   // else {
   //    const inputMode = parents.children[1];
   //    console.log(inputMode)
   // }

   commentSave(inputMode);
}

export const observeNode = () => {
   const mutationTarget = _.$('.naver_news');
   const observer = new MutationObserver(() => {
      const memoClick = _.$All('.show_memo');
      memoClick.forEach(el => {
         const memoInit = el.closest('.memo');
         memoInit.addEventListener('dblclick', ({
            target
         }) => {
            switchMode(target)
         })
      })
   })

   const config = {
      childList: true
   };
   observer.observe(mutationTarget, config);
}