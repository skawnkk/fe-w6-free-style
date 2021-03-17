document.querySelector('.ajaxsend').addEventListener('click',
   function () {
      var inputdata = document.forms[0].elements[0].value;
      sendAjax('http://localhost:3000/email/email_check', inputdata);
   }
)

function sendAjax(url, data) {
   var data = {
      'email': data,
   };
   data = JSON.stringify(data);
   var xhr = new XMLHttpRequest();
   xhr.open('POST', url);
   xhr.setRequestHeader('Content-Type', 'application/json');
   //{"email":"skawn11114@gmail.com"}
   xhr.send(data);

   xhr.addEventListener('load', function () {
      var result = xhr.responseText;
      result = JSON.parse(result);
      document.querySelector(".result").innerHTML = result.email;
   })
}