// С помощью GET запроса получаем список фотографий

// https://jsonplaceholder.typicode.com/photos?_limit=50

// из ответа берем thumbnailUrl для каждой фотографии и отображаем список всех.

// При клике на какую-то фотографию, открывается соответствующая большая фотография (свойство url). Фон при этом затемняется

//-------------------------- SOLUTION -----------------------
'use strict';




const prom = fetch(`https://jsonplaceholder.typicode.com/photos?_limit=50`);

prom
  .then(resp => resp.json()
    .then((data) => initGallery(data)
    ));


function initGallery(data) {
  const BG_FON_GALLERY = 'bg-fon-gallery';
  const ACTIVE_CLASS = 'show';
  const BTN_CLOSE_CLASS = 'btn-close';
  const CONTAINER_GALLERY_CLASS = 'container-gallery';


  const container = document.querySelector('.container');
  const containerGallery = document.createElement('div');
  const bgFonGallery = document.createElement('div');

  bgFonGallery.classList.add(BG_FON_GALLERY);
  container.append(bgFonGallery);



  containerGallery.addEventListener('click', onGalleryImgClick);
  bgFonGallery.addEventListener('click', onBtnCloseClick);


  function onGalleryImgClick(e) {
    const imgOptions = data.find((item) => item.thumbnailUrl === e.target.src);
    console.log(imgOptions);

    if (e.target.tagName === 'IMG') {
      const newImg = document.createElement('img');
      newImg.src = imgOptions.url;

      bgFonGallery.append(newImg);
      bgFonGallery.classList.add(ACTIVE_CLASS);
    }
  }


  function onBtnCloseClick(e) {
    if (e.target.classList.contains(BTN_CLOSE_CLASS)) {
      bgFonGallery.classList.remove(ACTIVE_CLASS);
      bgFonGallery.removeChild(bgFonGallery.lastChild);
    }
  }


  function createBtnClose() {
    const btnClose = document.createElement('div');
    btnClose.innerText = 'x';
    btnClose.classList.add(BTN_CLOSE_CLASS);
    bgFonGallery.append(btnClose);
  }


  function addGalleryImgs() {
    containerGallery.classList.add(CONTAINER_GALLERY_CLASS);
    for (let key of data) {
      const img = document.createElement('img');
      img.src = key.thumbnailUrl;
      containerGallery.append(img);
    }
    container.prepend(containerGallery);
  }


  addGalleryImgs();
  createBtnClose();
}



