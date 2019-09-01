// По клику на кнопку, нужно:

// 1) Очистить ul от старого содержимого

// 2) добавить в ul столько li, сколько написано в input.

// Текст в LI должен соответствовать порядковому номеру этого li (1,2,3,4);


// На кнопку пользователь может нажимать сколько угодно раз.

'use strict';

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





