import {
   searchEvent
} from "./search.js";
import {
   observeNode
} from "./comment.js";
import {
   loadKeepData
} from "./keep.js";


const init = () => {
   searchEvent();
   observeNode();
   loadKeepData();
};

init();