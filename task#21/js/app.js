'use strict';

$(function () {

  const SHOW_CLASS = 'show';

  const $mainContainer = $('#main-container');
  const $modalFormContainer = $('#modalForm-container');
  const $fieldInner = $('#field-inner');
  const $modalFormTemplate = $('#modalFormTemplate').html();
  const $noteTemplate = $('#noteTemplate').html();

  let modalInputTitle;
  let modalTextarea;
  let notes = [];

  $mainContainer.on('click', onContainerElementClick);
  $mainContainer.on('mouseup', '#noteTitle', onNoteTitleMouseup);


  function onContainerElementClick(e) {
    const element = e.target;
    switch (true) {
      case element.id === 'showModalFormBtn':
        showModal(); break;
      case element.id === 'btn-addNote':
        hiddeModal();
        submitForm(); break;
      case element.id === 'btn-cancel':
        hiddeModal(); break;
      case element.id === 'btn-deleteNote':
        deleteNote($(element).parents('.note-container'));
    }
  }


  init();

  function init() {
    appendModalForm();
    fetchNotes();
    draggableOn();
  }

  function fetchNotes() {
    notes = getState();
    renderNotes();
  }

  function deleteNote($elem) {
    const note = notes.find(item => item.id == $elem.data('noteId'));
    notes = notes.filter(item => item !== note);
    saveState();
    renderNotes();
  }

  function draggableOn() {
    $(function () {
      $(".draggable").draggable({
        handle: '#noteTitle',
        zIndex: 100
      });
    });
  }

  function onNoteTitleMouseup(e) {
    changeNotePosition($(e.target).parents('.note-container').data('noteId'),
      $(e.target).parents('.draggable'))
  }

  function changeNotePosition(id, el) {
    const note = notes.find((item) => item.id == id);
    note.left = el[0].style.left;
    note.top = el[0].style.top;
    saveState();
  }

  function appendModalForm() {
    $modalFormContainer.append($modalFormTemplate);
    modalInputTitle = $('#inputTitle')[0];
    modalTextarea = $('#descriptionTextarea')[0];
  }

  function showModal() {
    $('#modalForm').addClass(SHOW_CLASS);
  }

  function hiddeModal() {
    $('#modalForm').removeClass(SHOW_CLASS);
  }

  function submitForm() {
    const newNote = {
      id: Date.now(),
      title: modalInputTitle.value,
      description: modalTextarea.value,
      left: 0,
      top: 0
    }
    addNewNote(newNote);
  }

  function addNewNote(newNote) {
    notes.push(newNote);
    saveState();
    draggableOn();
    renderNotes();
  }


  function renderNotes() {
    const notesHtml = notes.map(({id, title, description,left,top}) => {
      return $noteTemplate.replace(`{{title}}`,title)
                          .replace(`{{description}}`,description)
                          .replace(`{{id}}`,id)
                          .replace(`{{leftPosition}}`,left)
                          .replace(`{{topPosition}}`,top)
    }).join('\n');
    $fieldInner.html(notesHtml);
  }


  function saveState() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  function getState() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  }

});


