export const sendAjax = (METHOD, url, data, func) => {
   let dataForm = {
      'value': data,
   }

   let dataToSend = JSON.stringify(dataForm);
   console.log(dataToSend)
   const xhr = new XMLHttpRequest();
   xhr.open(METHOD, url);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(dataToSend);

   xhr.addEventListener('load', function () {
      let result = xhr.responseText;
      result = JSON.parse(result);
      result.forEach(func);
   })
}