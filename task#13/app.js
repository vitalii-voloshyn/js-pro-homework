

// Написать класс фото галереи.

// В конструктор мы передаем элемент который нужно превратить в галерею.

// Галерея показывает одну фотку за раз. Периодически меняя его на следующую (3 секунды).

// Кроме того по бокам галерея добавляет кнопки, При нажатии на них, мы можем вручную переключить фото на следующее или предыдущее.


// Дополнительно:

// Также можно реализовать методы, которые можно будет вызывать в коде, для показа фото

// myGallery.show(2);

// myGallery.next();

// myGallery.prev();




'use strict';



class Gallery {
  constructor(elem) {
    this.elem = elem;
    this.currentVisible = null;
    this.totalItems = this.elem.children.length;
    this.lastElem = this.elem.lastElementChild;
    this.firstElem = this.elem.firstElementChild;
    this.init();
  }

  init() {
    this.addGalleryElement();
    this.addGalleryClasses();
    this.createGalleryBtn();
    this.show(0);
  }


  addGalleryElement() {
    const div = document.createElement('div');
    const body = document.body;
    body.prepend(div);
    div.append(this.elem);
  }


  addGalleryClasses() {
    const totalItems = this.elem;
    document.body.firstChild.classList.add(Gallery.CLASS_WRAPPER);

    this.firstElem.classList.add('first-item');
    this.lastElem.classList.add('last-item');

    for (let i = 0; i < this.totalItems; i++) {
      totalItems.children[i].classList.add(Gallery.CLASS_ITEMS);
    }

  }


  createGalleryBtn() {
    const prevBtn = document.createElement('span');
    const nextBtn = document.createElement('span');

    prevBtn.classList.add('prev__btn');
    nextBtn.classList.add('next__btn');
    prevBtn.innerText = '< prev ';
    nextBtn.innerText = 'next >';

    prevBtn.addEventListener('click', () => this.prevBtnClick());
    nextBtn.addEventListener('click', () => this.nexBtnClick());

    this.elem.parentElement.appendChild(prevBtn);
    this.elem.parentElement.appendChild(nextBtn);
  }



  show(index) {
    if (this.elem.children[index]) {
      this.setCurrentVisible(this.elem.children[index]);
    }
  }


  setCurrentVisible(el) {
    this.removeCurrentVisible();
    this.currentVisible = el;
    this.currentVisible.classList.add(Gallery.CLASS_SHOW);
  }


  removeCurrentVisible() {
    if (this.currentVisible) {
      this.currentVisible.classList.remove(Gallery.CLASS_SHOW);
    }
  }


  nexBtnClick() {
    const nextSibling = this.currentVisible.nextElementSibling;
    if (nextSibling) {
      this.setCurrentVisible(nextSibling);
    }
  }


  prevBtnClick() {
    const prevSibling = this.currentVisible.previousElementSibling;
    if (prevSibling) {
      this.setCurrentVisible(prevSibling);
    }
  }


  next() {
    console.log('NEXT');

  }


  prev() {
    console.log('PREV');
  }

}

Gallery.CLASS_SHOW = 'show';
Gallery.CLASS_WRAPPER = 'gallery__wrapper';
Gallery.CLASS_ITEMS = 'gallery__item';



const myGallery = new Gallery(document.getElementById('container'));




/* Опциональное задание - реализовать такие методы */

 //myGallery.show();
// myGallery.next();
// myGallery.prev();







//----------------------------------------------------------------







/*

addGalleryClasses(){
   this.elem.classList.add(Gallery.CLASS_WRAPPER);
  Array.prototype.forEach.call(this.elem.children,
    (el) => { el.classList.add(Gallery.CLASS_ITEMS); });
}

*/

/*





 prevBtnClick() {
    const prevSibling = this.currentVisible.previousElementSibling;

    const lastItem = this.currentVisible.lastChild;
    console.log(lastItem);
    if (!prevSibling.classList.contains(Gallery.CLASS_ITEMS)) {
      this.setCurrentVisible();
    } else if (prevSibling.classList.contains(Gallery.CLASS_ITEMS)) {
      console.log('Hey!!!');

    }
  }

*/



