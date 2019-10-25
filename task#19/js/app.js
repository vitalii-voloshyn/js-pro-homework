
// С помощью GET запроса получаем список фотографий

// https://jsonplaceholder.typicode.com/photos

// Получаем все фотографии, расчитываем сколько страниц нам понадобится, чтобы отобразить их постранично (например по 50 на страницу).

// Отображаем первую страницу. Под списком фотографий отображаем список страниц, пользователь может кликнуть на какую-то страницу и мы ее покажем. Информацию о странице нужно сохранить, когда пользователь нажмет F5 мы должны восстановить эту информацию и показать туже страницу.

// Остальные условия такие же как были раньше

// из ответа берем thumbnailUrl для каждой фотографии и отображаем список всех.

// При клике на какую-то фотографию, открывается соответствующая большая фотография (свойство url). Фон при этом затемняется



// ------------------ SOLUTION ---------------------------/


'use strict';

const LEFT_BTN_CLASS = 'left-btn-tabs';
const RIGHT_BTN_CLASS = 'right-btn-tabs';
const IMG_PER_PAGE = 50;

const containerGallery = document.getElementById('container');
const paginationElement = document.getElementById('pagination');
const tabsContainer = document.querySelector('.tabs-container');

const paginationTemplate = document.getElementById('paginationTemplate').innerHTML;


const URL = `https://jsonplaceholder.typicode.com/photos`;

fetch(URL)
.then(resp => resp.json())
.then(data => initGallery(data))





function initGallery(data){
  renderPagination(data);
  getImages(data);



  paginationElement.addEventListener('click', onPaginationTabClick);

  function onPaginationTabClick(e){
    const target = e.target.dataset.tabIndex;
     const currentPage = getCurrentPage(target);
     
  }




 function renderPagination(data){
   let pagesHtml =[];
   const totalPage = Math.ceil(data.length / IMG_PER_PAGE);
   for(let i = 0; i< totalPage;i++){
     pagesHtml.push(paginationTemplate
      .replace(`{{index}}`, i)
      .replace(`{{title}}`, i+1))
   }
   paginationElement.innerHTML = pagesHtml.join('\n');
   
 }
  
function getImages(data){
  
 // const pageImages = data.slice(1 * IMG_PER_PAGE, ( + 1) * IMG_PER_PAGE);
}
 
function getCurrentPage(index){
  return paginationElement.querySelector(`[data-tab-index="${index}"]`);
}

}
//----------------------------------------------------
