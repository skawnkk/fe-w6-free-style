import {
   _
} from "./utill.js";

var dragSrcEl = null;

function handleDragStart(e) {
   console.log('start')
   dragSrcEl = e.target;
   dragSrcEl.style.opacity = '0.4';

   e.dataTransfer.effectAllowed = 'move';
   e.dataTransfer.setData('text/html', dragSrcEl.innerHTML);
}


function handleDragOver(e) {
   console.log('over')
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
   console.log('leave')
   target.classList.remove('over');
}

function handleDrop(e) {
   console.log('drop')
   console.log(e)
   if (e.stopPropagation) {
      console.log(1)
      e.stopPropagation(); // stops the browser from redirecting.
   }
   console.log(this)
   if (dragSrcEl != this) {
      console.log(2)
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
   }

   return false;
}

function handleDragEnd({
   target
}) {
   console.log('end')
   target.style.opacity = '1';
}



export const drag = () => {
   const draggables = _.$All('.card_tpl');
   draggables.forEach(el => el.addEventListener('dragstart', handleDragStart, false))
   draggables.forEach(el => el.addEventListener('dragenter', handleDragEnter, false))
   draggables.forEach(el => el.addEventListener('dragleave', handleDragLeave, false))
   draggables.forEach(el => el.addEventListener('dragover', handleDragOver, false))
   draggables.forEach(el => el.addEventListener('drop', handleDrop, false))
   draggables.forEach(el => el.addEventListener('dragend', handleDragEnd, false))
}