export function makeCard(arr) {
   console.log(arr)
   const paste_section = document.querySelector('.naver_news');
   const tpl =
      `<div class="card_tpl">
         <a href="${arr.link}">
         <div><img src="${arr.img}"></div>
            <h5>${arr.title}</h5>
            <div class="desc">${arr.desc}</div>
         </a>
      </div>`
   paste_section.insertAdjacentHTML('beforeEnd', tpl);
}