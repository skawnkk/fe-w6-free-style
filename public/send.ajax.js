export const sendAjax = (url, data, func) => {
   let dataForm = {
      'value': data,
   }
   let dataToSend = JSON.stringify(dataForm);
   const xhr = new XMLHttpRequest();
   xhr.open('POST', url);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(dataToSend);

   xhr.addEventListener('load', function () {
      let result = xhr.responseText;
      result = JSON.parse(result);
      result.forEach(func);
   })
}