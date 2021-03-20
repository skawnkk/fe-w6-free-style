import {
   _
} from "./utill.js";

var dragSrcEl = null;

function handleDragStart(e) {
   dragSrcEl = e.target;
   dragSrcEl.style.opacity = '0.4';

   e.dataTransfer.effectAllowed = 'move';
   e.dataTransfer.setData('text/html', dragSrcEl.innerHTML);
}

function handleDragOver(e) {
   if (e.preventDefault) {
      e.preventDefault();
   }
   e.dataTransfer.dropEffect = 'move';
   return false;
}

function handleDragEnter({
   target
}) {
   target.classList.add('over');
}

function handleDragLeave({
   target
}) {
   target.classList.remove('over');
}

function handleDrop(e) {
   if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
   }

   if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
   }

   return false;
}

function handleDragEnd({
   target
}) {
   target.style.opacity = '1';
}

export const dragAndDrop = () => {
   const draggables = _.$All('.card_tpl');
   draggables.forEach(el => el.addEventListener('dragstart', handleDragStart, false))
   draggables.forEach(el => el.addEventListener('dragenter', handleDragEnter, false))
   draggables.forEach(el => el.addEventListener('dragleave', handleDragLeave, false))
   draggables.forEach(el => el.addEventListener('dragover', handleDragOver, false))
   draggables.forEach(el => el.addEventListener('drop', handleDrop, false))
   draggables.forEach(el => el.addEventListener('dragend', handleDragEnd, false))
}