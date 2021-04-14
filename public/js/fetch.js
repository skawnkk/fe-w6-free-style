export const requestfetch = async (METHOD, url, data, func) => {
   let requestData;
   let dataForm = {
      'value': data,
   }

   if (METHOD === 'POST') {
      try {
         requestData = await fetch(url, {
            method: METHOD,
            headers: {
               'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dataForm)
         });
      } catch (err) {
         console.error(err);
      }
   } else {
      try {
         requestData = await fetch(url, {
            method: METHOD,
            headers: {
               'Content-Type': 'application/json;charset=utf-8'
            },
         });
      } catch (err) {
         console.error(err);
      }

   }
   let response = await requestData.json();
   response.forEach(func);
}