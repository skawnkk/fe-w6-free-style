import {
   searchEvent
} from "./search.js";
import {
   observeNode
} from "./comment.js";


const init = () => {
   searchEvent();
   observeNode();
};

init();