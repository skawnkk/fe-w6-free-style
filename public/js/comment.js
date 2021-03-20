import {
   sendAjax
} from "./send.ajax.js";

import {
   _
} from "./utill.js";

import {
   black,
   white
} from "../img/bookmark.js";

const sendData = (id, comment, keep, page) => {
   const obj = {
      '_id': id,
      'save': keep,
      'comment': comment
   }

   const url = `http://localhost:3000/comment/${page}`;
   sendAjax('POST', url, obj, null);
}

const switchBookMark = (bookmark) => {
   const targetCard = bookmark.closest('.card_tpl')
   const id = targetCard.id;
   let comment;
   if (_.$('.input_memo input', targetCard)) {
      comment = _.$('.input_memo input', targetCard).value;
   } else comment = null;

   const bookmarkClass = bookmark.firstElementChild.attributes.class.value;

   (bookmarkClass === 'black') ? changeWhiteUnSave(): changeBlackSave();

   function changeBlackSave() {
      bookmark.innerHTML = black;
      sendData(id, comment, true, 'save')
   }

   function changeWhiteUnSave() {
      bookmark.innerHTML = white;
      sendData(id, comment, false, 'save')
   }

}

const commentSave = (inputMode) => {
   const targetCard = inputMode.closest('.card_tpl')
   const targetSaveBtn = _.$('.save_btn', targetCard);
   const targetShowMode = _.$('.show_memo', targetCard);
   const targetBookmark = _.$('.bookmark', targetCard);
   const targetInputMode = inputMode;
   targetSaveBtn.addEventListener('click', () => {
      switchBookMark(targetBookmark);

      targetShowMode.innerText = _.$('input', inputMode).value;
      targetShowMode.classList.remove('under');
      targetInputMode.classList.add('hide');
   })
}

const switchMode = (target) => {
   const parents = target.closest('.memo');
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

   commentSave(inputMode);
   //!이미댓글이 있는 경우에 대한 처리
   // else {
   //    const inputMode = parents.children[1];
   //    console.log(inputMode)
   // }

}

const saveThruSaveBtn = () => {
   const memoClick = _.$All('.show_memo');
   memoClick.forEach(el => {
      const memoInit = el.closest('.memo');
      memoInit.addEventListener('dblclick', ({
         target
      }) => {
         switchMode(target)
      })
   })
}

const saveThruBookmark = () => {
   const Bookmarks = _.$All('.bookmark')
   Bookmarks.forEach(el => el.addEventListener('click', ({
      target
   }) => {
      const bookmark = target.closest('.bookmark')
      switchBookMark(bookmark)
   }))
}


export const commentCtrl = () => {
   saveThruSaveBtn()
   saveThruBookmark()
}