const visited = [];
const query = (select, root = document) => {
  console.log("*****************************");
  console.log("위의 root:",root);
  // console.log("select:",select);
  if (root === null) return;
  if (root.className === select) {
    console.log("마지막답:",root);
    return root;
  } else {
    let result;
    root.childNodes.forEach((node,i) => {
      if(result) return;
      if (!visited.includes(node)) {
        visited.push(node);
        root = node;
        console.log(i,"안의 바뀐 root(node):",root);

        result = query(select, root);
      }
      else return result;
    });
  }
};

const test = query('wrap1');
console.log(test);
