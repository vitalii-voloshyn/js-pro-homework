
// List CONTACTS




/*
 Я не смог сделать копку delete, планировал что она будет удалять элемент с классом toggled
 но не смог сделать проверку if() так так проверял наличие класса у HTMLcolection.
 По другому реализовать не успел...

*/



'use strict';

class List {
  static LIST_WRAPPER_CLASS = 'list-wrapper';
  static LIST_FORM_CLASS = 'list-form';
  static LIST_TITLE_CLASS = 'list-title';
  static TITLE_ITEMS_CLASS = 'title-items';
  static BTN_DELETE_CLASS = 'btn-delete';
  static BTN_ADD_CLASS = 'btn-add';
  static LIST_CONTAINER_CLASS = 'list-container';
  static ITEM_TOGGLET_CLASS = 'item-ready';


  constructor(elem) {
    this.elem = elem;
    this.form = document.querySelector('form');
    this.listTitleElement = document.querySelector('ul');
    this.listTitleElements = document.querySelectorAll('li');
    this.titelItems = this.listTitleElement.children;
    this.inputName = this.form.firstElementChild;
    this.inputSurname = this.form.firstElementChild.nextElementSibling;
    this.inputPhone = this.form.lastElementChild;
    this.listContainer = document.querySelectorAll('div');
    this.containerContacts = this.listContainer[1];


    this.init();
  }


  init() {
    this.addClasses();
    this.createTitleName();
    this.creatActionsBtn();
    this.bindEventListener();
  }


  addClasses() {
    this.elem.classList.add(List.LIST_WRAPPER_CLASS);
    this.form.classList.add(List.LIST_FORM_CLASS);
    this.listTitleElement.classList.add(List.LIST_TITLE_CLASS);
    Array.prototype.forEach.call(this.titelItems,
      el => { el.classList.add(List.TITLE_ITEMS_CLASS); });
  }

  createTitleName() {
    this.listTitleElements[0].innerText = 'name';
    this.listTitleElements[1].innerText = 'surname';
    this.listTitleElements[2].innerText = 'telephone';
    this.listTitleElements[3].innerHTML = 'action';
  }

  creatActionsBtn() {
    const btnDelete = document.createElement('div');
    const btnAdd = document.createElement('div');

    btnDelete.classList.add(List.BTN_DELETE_CLASS);
    btnAdd.classList.add(List.BTN_ADD_CLASS);

    btnDelete.innerHTML = 'delete';
    btnAdd.innerHTML = 'add';

    btnAdd.addEventListener('click', () => this.onBtnAddClick());
    btnDelete.addEventListener('click', () => this.onBtnDeleteClick());

    this.elem.appendChild(btnDelete);
    this.elem.appendChild(btnAdd);
  }


  bindEventListener() {
    this.containerContacts.addEventListener('click', this.onElementClick);
  }

  generetContactElements() {

    const divContainer = document.createElement('div');
    divContainer.classList.add(List.LIST_CONTAINER_CLASS);

    const divName = document.createElement('div');
    const divSurname = document.createElement('div');
    const divPhone = document.createElement('div');

    divName.innerText = this.inputName.value || '-';
    divSurname.innerText = this.inputSurname.value || '-';
    divPhone.innerText = this.inputPhone.value || '-';

    divContainer.append(divName);
    divContainer.append(divSurname);
    divContainer.append(divPhone);

    this.containerContacts.append(divContainer);
  }


  onElementClick(e) {
    e.target.classList.toggle(List.ITEM_TOGGLET_CLASS);
  }


  onBtnAddClick() {
    this.generetContactElements();
    this.resetForm();
  }

  
  onBtnDeleteClick() {
  
  }


  resetForm() {
    this.form.reset();
  }

}




const myList = new List(document.querySelector('.container'));
