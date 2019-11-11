
// Tabset

'use strict';


const TABSET_WRAPPER = 'tabset__wrapper';
const NAV_TABSET_CLASS = 'nav-tabset';
const TAB_TITLE_CLASS = 'tab-title';
const TABSET_ACTIVE_CLASS = 'active';
const TAB_CONTENT_CLASS = 'tab-content';
const CONTENT_WRAPPER_CLASS = 'content-wrapper';

class Tabset {
  constructor(elem) {
    this.elem = elem;
    this.bindClasses();
    this.bindEventListener();
    this.navTabs = document.querySelectorAll('.tab-title');
    this.tabsContent = document.querySelectorAll('.tab-content');
  }


  bindClasses() {
    this.elem.firstElementChild.classList.add(NAV_TABSET_CLASS);

    document.querySelector('.tab-content ').classList.add(TABSET_ACTIVE_CLASS);
    document.querySelector('.tab-title').classList.add(TABSET_ACTIVE_CLASS);
  }


  bindEventListener() {
    document.querySelectorAll('.tab-title').forEach(el => {
      el.addEventListener('click', this.onTabElementClick.bind(this));
    });
  }


  onTabElementClick(e) {
    const target = e.target.dataset.tab;
    const contentTarget = document.querySelector('.' + target);
    this.removeElementClasses();

    e.target.classList.add(TABSET_ACTIVE_CLASS);
    contentTarget.classList.add(TABSET_ACTIVE_CLASS);
  }


  removeElementClasses() {
    this.navTabs.forEach(el => el.classList.remove(TABSET_ACTIVE_CLASS));
    this.tabsContent.forEach(el => el.classList.remove(TABSET_ACTIVE_CLASS));
  }


  show(index) {
    const isVisible = this.navTabs[index].classList.contains(TABSET_ACTIVE_CLASS);
    if (!isVisible) {
      this.removeElementClasses();
      this.navTabs[index].classList.add(TABSET_ACTIVE_CLASS);
      this.tabsContent[index].classList.add(TABSET_ACTIVE_CLASS);
    }
  }

}




const myTabset = new Tabset(document.querySelector('.container'));

/*

myTabset.show(2);


*/



//==================================================================

 