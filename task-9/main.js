// Реализовать список todo

// на странице есть список, под списком форма с инпутом и кнопкой, с помощью них пользователь может добавлять новые дела в список.

// При клике на какое-то дело в списке, оно становится зеленым, при повторном клике возвращается в дефолтный цвет.

// В каждом элемента списка есть кнопка удалить (крестик). При клике на него дело удаляется из списка


'use strict';





const btn = document.querySelector('#btn');
const listElement = document.querySelector('#list');
const todoForm = document.querySelector('#todo__form');
const inputValue = document.querySelector('#input__field').value;


btn.addEventListener('click', onAddBtnClick);
listElement.addEventListener('click', onClickListElements);



function onAddBtnClick() {
  addElementsTodoList();
  resetForm();
}



function addElementsTodoList() {
  const newLi = generateElements();
  listElement.append(newLi);
}



function resetForm(){
  todoForm.reset();
}



function generateElements() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delText = document.createTextNode('x');
  span.append(delText);
  span.classList.add('delete', 'delete:hover');
  const inputValue = document.querySelector('#input__field').value;
  li.innerHTML =  inputValue || 0;            
  li.classList.add('li__default');
  li.appendChild(span);
  return li;
}



function onClickListElements(e) {
  if (e.target.classList.contains('li__default')) {
    e.target.classList.toggle('task__done');
  } else if (e.target.classList.contains('delete')) {
    deleteElement(e.target.parentNode);
     
  }
}

function deleteElement(el){
 el.remove();
}
 
