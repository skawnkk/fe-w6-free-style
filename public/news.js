function makeTpl(title, link) {
   const paste_section = document.querySelector('.naver_news');
   const div = document.createElement('div');
   const tpl =
      `<div class="card_tpl">
      <div>
         <h5>${title}</h5>
         <a href="${link}"></a>
      </div>
   </div>`
   div.innerHTML(tpl)
   paste_section.insertAdjacentElement(div);


}

export function makeCard(arr) {
   arr.forEach(el => {
      const title = el[1];
      const link = el[2];
      makeTpl(title, link)
   })
}