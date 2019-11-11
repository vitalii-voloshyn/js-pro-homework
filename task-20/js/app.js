// Доска со стикерами
// На странице есть поле и кнопка "Добавить". Когда пользователь нажимает добавить на поле добавляется "стикер".

// У стикера есть заголовок и тело. Заголовок (input) и тело (textarea) можно редактировать. рядом с заголовком находится крестик, с его помощью можно удалить стикер.

// Все данные храним в локалсторедж и восстанавливаем при перезагрузке страницы.

// ЗАДАНИЕ СО ЗВЕЗДОЧКОЙ

// Добавить возможность перемещать стикеры, тягая их за заголовок. Положение тоже хранить в локалсторедж и восстанавливать при перезагрузке.



// ----------------- SOLUTION ------------------------/


'use strict';


const container = document.getElementById('container-desk');
const noteModalElement = document.getElementById('note-modal');
const stickerContainer = document.getElementById('stickerContainer');
const modalwrapperElement = document.getElementById('modal-wrapper');
const inputNoteTitle = document.getElementById('inputNoteTitle');
const modalTextarea = document.getElementById('modalTextarea');


//const modalNoteTemplate = document.getElementById('modalNoteTemplate').innerHTML;
const stickerTemplate = document.getElementById('stickerTemplate').innerHTML;

const SHOW_CLASS = 'show';
const DELETE_STICKER_CLASS = 'delete-sticker';



container.addEventListener('click', onContainerElementClick);
stickerContainer.addEventListener('click', onStickerClick);

let noteItems = [];
  


init();

 function onContainerElementClick(e){
   const target = e.target;
   switch(true){
     case target.classList.contains('btn-add'):
       showModal();break;
     case target.classList.contains('btn-seve'):
       hiddeModal(); 
       submitNotes();;break;
     case target.classList.contains('btn-close-modal'):
        hiddeModal();break;
   }
 }

 function onStickerClick(e){
   const target = e.target;
   if(target.classList.contains(`${DELETE_STICKER_CLASS}`)){
     console.log(e.target);
     deleteStickerItem(target.parentElement.dataset.stickerId);
   }
 }

function deleteStickerItem(stickerId){
  noteItems = noteItems.filter(elem => elem.id != stickerId);
  deleteStickerElement(stickerId);
  saveState();
}

 function deleteStickerElement(stickerId){
   const element = getStickerId(stickerId);
   element && element.remove();
 }

 function getStickerId(id){
  return stickerContainer.querySelector(`[data-sticker-id="${id}"]`);
 }


 function init(){
  fetchNotes();
  showeSticker();
 }

function fetchNotes(){
   noteItems = getState();
 }


 function showeSticker(){
   
 }



function showModal(){
  noteModalElement.classList.add(SHOW_CLASS);
}

 function hiddeModal(){
  noteModalElement.classList.remove(SHOW_CLASS);
 }


 
 function submitNotes(){
 createNewNote();
 resetModalvalue();
}

function  resetModalvalue(){
  inputNoteTitle.value = '';
  modalTextarea.value = '';
}

function createNewNote(){
    const newNote = {
    title: inputNoteTitle.value,
    description: modalTextarea.value,
    id: Date.now()
  }
  addNewNote(newNote);
}

function addNewNote(newNote){
  noteItems.push(newNote);
  saveState();
  addStickerOnDesk(newNote);
}


function addStickerOnDesk(newNote){
 newNote = stickerTemplate
           .replace(`{{id}}`, newNote.id)
           .replace(`{{stickerTitle}}`, newNote.title)
           .replace(`{{stickerText}}`, newNote.description)

  stickerContainer.insertAdjacentHTML('afterbegin',newNote);
}

 
function saveState(){
  localStorage.setItem('notes',JSON.stringify(noteItems));
}

function getState(){
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes): [];
}




