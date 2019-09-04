// По клику на кнопку, нужно:

// 1) Очистить ul от старого содержимого

// 2) добавить в ul столько li, сколько написано в input.

// Текст в LI должен соответствовать порядковому номеру этого li (1,2,3,4);


// На кнопку пользователь может нажимать сколько угодно раз.

'use strict';

//---------------------- 2й вариант -----------------

/*
const btn = document.querySelector('#addBtn');

btn.addEventListener('click', addNewElement);
btn.addEventListener('mouseup', deleteElement);



function addNewElement() {
  const list = document.querySelector('#list');
  const inputValue = document.querySelector('#count').value;

  for (let i = 0; i < inputValue; i++) {
    const newLi = document.createElement('li');
    list.appendChild(newLi);
    newLi.innerText = 'Number li ' + (i + 1);
  }
}


function deleteElement() {
  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
}


*/

//=========================== 1й - Вариант =========================================

/*
//---------------------------------------------------------
const btn = document.querySelector('#addBtn');

btn.addEventListener('click', addNewElement);


function addNewElement() {
  const list = document.querySelector('#list');
  const inputValue = document.querySelector('#count').value;
  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
  for (let i = 0; i < inputValue; i++) {
    const newLi = document.createElement('li');
    list.appendChild(newLi);
    newLi.innerText = 'Number li ' + (i + 1);
  }
}

*/
//-------------------------------------------------------------



//-------------- Решене в классе! --------------------

// 1й способ с помощью fragment:
/*
const listElement = document.getElementById('list');
const countInputValue = document.getElementById('count');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', onAddButtonClick);


function onAddButtonClick() {
  //clearList();
  generateNewList();
}



function clearList() {
  listElement.innerHTML = '';
}

/*
function generateNewList() {
  const count = +countInputValue.value || 0;
  const fragment = document.createDocumentFragment(); // генерим fragment 
  for (let i = 0; i < count; i++) {
    const newLi = generateLi(i + 1);
    fragment.append(newLi); // добавляем newLi cначала в fragment
  }


  listElement.append(fragment);// fragment вставка произойдет за 1 раз
}




function generateLi(index) {
  const li = document.createElement('li');
  li.textContent = (index);
  return li;
}

*/


//  второй способ при помощи template (шаблонизация):

const listElement = document.getElementById('list');
const countInputValue = document.getElementById('count');
const addBtn = document.getElementById('addBtn');
const liTemplate = document.getElementById('litemplate').innerHTML;


addBtn.addEventListener('click', onAddButtonClick);


function onAddButtonClick() {
  //clearList();
  generateNewList();
}



function clearList() {           // эта функция не нужна так как template = '', 
  listElement.innerHTML = '';    // и мы просто перезаписываем заново новое значение
}

function generateNewList() {
  const count = +countInputValue.value || 0;
  let template = '';
  for (let i = 0; i < count; i++) {
    template += generateLi(i + 1);
    
  }

  listElement.innerHTML = template;
}


function generateLi(index) {
  return liTemplate.replace(`{index}`, index);
}