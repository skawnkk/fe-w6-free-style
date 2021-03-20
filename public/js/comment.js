import {
   sendAjax
} from "./send.ajax.js";

import {
   _
} from "./utill.js";

import {
   variableGrouping
} from "./variables.obj.js";

import {
   black,
   white
} from "../img/bookmark.js";

const sendData = (id, comment, keep) => {
   const obj = {
      '_id': id,
      'save': keep,
      'comment': comment
   }

   const url = `http://localhost:3000/comment/save`;
   sendAjax('POST', url, obj, null);
}

const switchBookMark = (variables) => {
   console.log(variables)
   const cardId = variables.card.id;
   const bookmark = variables.bookmark;
   let comment;

   if (variables.inputWindow) comment = variables.inputWindow.value;

   const bookmarkClass = bookmark.firstElementChild.attributes.class.value;
   (bookmarkClass === 'black') ? changeWhiteUnSave(): changeBlackSave();

   function changeBlackSave() {
      bookmark.innerHTML = black;
      sendData(cardId, comment, true)
   }

   function changeWhiteUnSave() {
      bookmark.innerHTML = white;
      sendData(cardId, comment, false)
   }
}

const commentSave = (variables) => {
   if (variables.saveBtn === null) variables.saveBtn = _.$('.save_btn', variables.card);
   variables.saveBtn.addEventListener('click', () => {
      switchBookMark(variables);

      variables.showWindow.innerText = variables.inputWindow.value;
      variables.showWindow.classList.remove('under');
      variables.inputWindow.classList.add('hide');
   })
}

const switchMode = (variables) => {

   if (!variables.inputWindow) {
      const newInputNode = _.create('div')
      newInputNode.className = "input_memo";
      newInputNode.innerHTML =
         `<input type="text"></input>
         <div class="save_btn" type="button">save</div>`;
      const parent = variables.showWindow.parentNode;
      parent.insertBefore(newInputNode, variables.showWindow);
      variables.showWindow.innerText = ''
      variables.inputWindow = newInputNode.firstElementChild;
   } else {
      variables.inputWindow.firstElementChild.value = variables.showWindow.innerText;
      variables.showWindow.classList.add('under');
      variables.inputWindow.classList.remove('hide');
   }

   commentSave(variables);
}

const saveThruSaveBtn = () => {
   const memoClick = _.$All('.show_memo');
   memoClick.forEach(el => {
      const memoInit = el.closest('.memo');
      memoInit.addEventListener('dblclick', ({
         target
      }) => {
         const variables = variableGrouping(target)
         switchMode(variables)
      })
   })
}

const saveThruBookmark = () => {
   const Bookmarks = _.$All('.bookmark')
   Bookmarks.forEach(el => el.addEventListener('click', ({
      target
   }) => {
      const variables = variableGrouping(target)
      switchBookMark(variables)
   }))
}

export const commentCtrl = () => {
   saveThruSaveBtn()
   saveThruBookmark()
}