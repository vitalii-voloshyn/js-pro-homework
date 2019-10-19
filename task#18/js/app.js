

// List v2


'use strict';


const usersList = document.getElementById('users-list');
const usersInfo = document.getElementById('users-info');
const addNewUserBtn = document.getElementById('add-userBtn');
const btnDelete = document.getElementById('btn-delete');
const btnSave = document.getElementById('btn-save');
const formField = document.getElementById('formField');
const inputName = document.getElementById('inputName');
const inputPhone = document.getElementById('inputPhone');
const inputEmail = document.getElementById('inputEmail');
const inputId = document.getElementById('inputId');
const usersListTemplate = document.getElementById('usersListTemplate').innerHTML;


const DATA_URL = `https://jsonplaceholder.typicode.com/users`;


addNewUserBtn.addEventListener('click', onAddBtnClick);
usersList.addEventListener('click', onUserElementClick);
btnDelete.addEventListener('click', onBtnDeletetClick);
btnSave.addEventListener('click', onBtnSaveClick);


requestJson(DATA_URL)
  .then(renderUsersName)


function requestJson(url) {
  return fetch(url)
    .then(resp => resp.json())
    .catch(err => console.warn(err))
}

function onBtnDeletetClick() {
  if (inputId.value)
    requestDelete(inputId.value);
}


function onAddBtnClick() {
   formField.reset();

  // const newUser = getInputValue();
  // addNewUser(newUser);
  //clearFormInput();
}

function onBtnSaveClick() {
  const user = getInputValue();
  console.log(user)
  if (user.id !== '') {
    updateUserData(user);
  } else {
    alert('user id is empty!');
  }

}

function onUserElementClick(e) {
  const id = e.target.dataset.userId;
  if (id) {
    requestUserDetail(id);
  }
}

function requestUserDetail(id) {
  fetch(`${DATA_URL}/${id}`)
    .then(resp => resp.json())
    .then(showUserDetail)
}

function showUserDetail(user) {
  inputId.value = user.id;
  inputName.value = user.name;
  inputPhone.value = user.phone;
  inputEmail.value = user.email;
}

function clearFormInput() {
  inputId.value = '';
  inputName.value = '';
  inputPhone.value = '';
  inputEmail.value = '';
}


function renderUsersName(data) {
  const userTemplate = data.map((user) => {
    return usersListTemplate.replace(`{{username}}`, user.username)
      .replace(`{{id}}`, user.id)
  })
  usersList.innerHTML = userTemplate.join('\n');
  return data;
}


function requestDelete(id) {
  fetch(`${DATA_URL}/${id}`, {
    method: 'DELETE'
  }).then(() => {
    removeUser(id)
  })
    .then(() => clearFormInput())
}

function removeUser(id) {
  const elem = getUserElement(id);
  elem.remove();
}

function getUserElement(id) {
  return document.querySelector(`[data-user-id="${id}"]`);
}


function getInputValue() {
  return {
    id: inputId.value,
    name: inputName.value,
    phone: inputPhone.value,
    email: inputEmail.value,
  }
}

function addNewUser(newUser) {
  fetch(DATA_URL, {
    method: 'POST',
    body: JSON.stringify(newUser)
  })
    .then((resp) => resp.json())
    .then((data) => addNewUserList(data))
}

/*
function addNewUserList(data) {
  const newelement = document.createElement('div');
  newelement.setAttribute('data-user-id', `${data.id}`);
  newelement.innerHTML = `${data.name} ${data.id}`
  usersList.append(newelement);
}
*/

function updateUserData(user) {
  fetch(`${DATA_URL}/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user)
  })
    .then(resp => resp.json())
    .then(data => alert(`user-id:${data.id} update successful!`))
} 