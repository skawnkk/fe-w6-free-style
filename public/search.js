
document.querySelector('.fetch').addEventListener('click', 
   function(){
      const searchTerm = document.forms[1].elements[0].value;
      dataDownload('http://localhost:3000/download', searchTerm);
   }
)

async function dataDownload(url, keyword){
   var data = {
      'searchterm': keyword,
      };
   data = JSON.stringify(data);

   var xhr = new XMLHttpRequest();
   xhr.open('POST', url);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(data);

   xhr.addEventListener('load', function(){
   var result =xhr.responseText;
   result = JSON.parse(result);
   result.forEach(el=>{
      const div = document.createElement('div')
      div.innerText = el;
      document.querySelector(".result2").appendChild(div);
   })
   })
}
