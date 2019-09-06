// Реализовать список todo

// на странице есть список, под списком форма с инпутом и кнопкой, с помощью них пользователь может добавлять новые дела в список.

// При клике на какое-то дело в списке, оно становится зеленым, при повторном клике возвращается в дефолтный цвет.

// В каждом элемента списка есть кнопка удалить (крестик). При клике на него дело удаляется из списка





// У меня не получилось сделать вывод li  с помощью шаблонизции.

'use strict';





const btn = document.querySelector('#btn');
const listElement = document.querySelector('#list');
const todoForm = document.querySelector('#todo__form');


btn.addEventListener('click', onAddBtnClick);
listElement.addEventListener('click', onClickListElements);



function onAddBtnClick() {
  addElementsTodoList();
}



function addElementsTodoList() {
  const newLi = generateElements();
  newLi.classList.add('li__default');
  listElement.append(newLi);
}




function generateElements() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delText = document.createTextNode('x');
  span.append(delText);
  span.classList.add('delete', 'delete:hover');
  let inputValue = document.querySelector('#input__field').value;
  li.textContent = inputValue;
  li.appendChild(span);
  return li;
}



function onClickListElements(e) {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('task__done');
  } else if (e.target.tagName == 'SPAN') {
    let element = e.target.parentNode;
    element.remove();
  }
}



