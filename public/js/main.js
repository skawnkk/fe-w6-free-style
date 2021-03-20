import {
   searchEvent
} from "./ctrl.search.js";
import {
   observeNode
} from "./observer.js";
import {
   loadKeepData
} from "./ctrl.keepbtn.js";


const init = () => {
   searchEvent();
   observeNode();
   loadKeepData();
};

init();