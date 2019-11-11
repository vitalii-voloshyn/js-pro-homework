






'use strict';


const DATA_URL = `https://jsonplaceholder.typicode.com/photos`;

  fetch(DATA_URL)
   .then(resp => resp.json()
    .then((data) => initGallery(data)
    ));


function initGallery(data) {
  const BG_FON_GALLERY = 'bg-fon-gallery';
  const ACTIVE_CLASS = 'show';
  const BTN_CLOSE_CLASS = 'btn-close';
  //const CONTAINER_GALLERY_CLASS = 'container-gallery';
  const PAGINATION_ITEM_CLASS = 'pagination-item';
  const TAB_ACTIVE_CLASS = 'tab-active';
  const IMGS_LIMIT = 50

  const smallImgTemplate = document.getElementById('smallImgTemplate').innerHTML;
  const paginationTemplate = document.getElementById('paginationTemplate').innerHTML;
  const paginationElement = document.getElementById('pagination');
  const containerGallery = document.getElementById('container-images-gallery');
  const bgFonElement = document.getElementById('bgFonElement');

   bgFonElement.className = BG_FON_GALLERY;

 let imagesList = [];
 let totalPage = 0;
 let currentPage = getState() || 0;

  containerGallery.addEventListener('click', onGalleryImgClick);
  bgFonElement.addEventListener('click', onBtnCloseClick);
  paginationElement.addEventListener('click', onpaginationTabClick);


init();

  function init(){
  fetchImagesList(data)
  renderPagination(data);
  getPaginationPage(data);
  showPage(currentPage);
  createBtnClose();
  }
  


  function fetchImagesList(data){
    imagesList = data;
  }
 
  
  function onpaginationTabClick(e){
    const index = +e.target.dataset.tabIndex;
    if(e.target.classList.contains(`${PAGINATION_ITEM_CLASS}`)){
     onTabClick(index);
    }
  }
   

  function onGalleryImgClick(e) {
    const imgOptions = data.find((item) => item.thumbnailUrl === e.target.src);
    
    if (e.target.tagName === 'IMG') {
      const newImg = document.createElement('img');
      newImg.src = imgOptions.url;

      bgFonElement.append(newImg);
      bgFonElement.classList.add(ACTIVE_CLASS);
    }
  }


  function onBtnCloseClick(e){
    if (e.target.classList.contains(BTN_CLOSE_CLASS)) {
      bgFonElement.classList.remove(ACTIVE_CLASS);
      bgFonElement.removeChild(bgFonElement.lastChild);
    }
  }


 function onTabClick(index){
    showPage(index);
  }


 function getPaginationPage(){
  totalPage = Math.ceil(imagesList.length / IMGS_LIMIT);
   renderPagination(totalPage);
 }


 function renderPagination(totalPage){
  let pagesHtml = [];
  for(let i = 0; i < totalPage;i++){
    pagesHtml.push(paginationTemplate.replace(`{{index}}`, i)
                                    .replace(`{{title}}`, i +1))
  } 
    paginationElement.innerHTML = pagesHtml.join('\n');
 }


  function renderGalleryImgs(images) {
   const imagesHtml = images.map(item => {
     return smallImgTemplate.replace(`{{url}}`,item.thumbnailUrl)
                            .replace(`{{title}}`, item.title)
                            .replace(`{{id}}`, item.id)
   })
   containerGallery.innerHTML = imagesHtml.join('\n');
  }


  function showPage(index){
    currentPage = index;
    saveState('currentPage',index);
    const images = getImageItems(index);
    toggleTabItem(index);
    renderGalleryImgs(images);
  }


function toggleTabItem(index){
  const tabActive = paginationElement.querySelector(`.${TAB_ACTIVE_CLASS}`);
  if(tabActive){
    tabActive.classList.remove(TAB_ACTIVE_CLASS);
  }
  paginationElement.querySelector(`[data-tab-index="${index}"]`)
  .classList.add(TAB_ACTIVE_CLASS);
}

function getImageItems(index){
  return imagesList.slice(index * IMGS_LIMIT, (index + 1) * IMGS_LIMIT);
}

 function saveState(key,value){
    localStorage.setItem(key,value);
  }

  function getState(){
    const savePage = localStorage.getItem('currentPage');
    return savePage ? savePage : 0;
  }

  function createBtnClose() {
    const btnClose = document.createElement('div');
    btnClose.innerText = 'x';
    btnClose.classList.add(BTN_CLOSE_CLASS);
    bgFonElement.append(btnClose);
  }

 
}

