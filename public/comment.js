import {
   sendAjax
} from "./send.ajax.js";
import {
   _
} from "./utill.js";

const commentSave = (inputMode) => {
   const saveBtn = inputMode.children[1];
   const showMode = inputMode.parentNode.children[1];

   saveBtn.addEventListener('click', ({
      target
   }) => {
      const comment = target.parentNode.children[0].value;
      showMode.innerText = comment;
      showMode.classList.remove('under');
      inputMode.classList.add('hide');

      const obj = {
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