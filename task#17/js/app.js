// Список пользователей
// url для получения списка юзеров

// https://jsonplaceholder.typicode.com/users

// url для получения деталей одного юзера

// https://jsonplaceholder.typicode.com/users/{{ID}}

// Интерфейс состоит из двух колонок:

// В левой отображаем список пользователей
// В правой детали текущего выбранного пользователя (при заходе на страницу отображаем данные первого пользователя)

// При клике на любого пользователя в левой колонке - отображаем в правой детали о нем. Детали берем с сервера.


//--------------- SOLUTION -------------------/


'use strict';


const url = `https://jsonplaceholder.typicode.com/users`;

const request = fetch(url);
request
  .then((resp) => resp.json())
  .then((data) => initUsersList(data))
  .catch((error) => console.log('error', error))


function initUsersList(data) {

  const USER_ITEM_CLASS = 'user-item';

  const container = document.querySelector('.container');
  const userList = document.getElementById('user-list');
  const userContainer = document.querySelector('.user-container-info');
  const usersTemplate = document.getElementById('usersTemplate').innerHTML;
  const userInfoTemplate = document.getElementById('userInfoTemplate').innerHTML;


  container.addEventListener('click', onUserClick);


  function onUserClick(e) {
    const userDetail = data.find(elem => elem.id === +e.target.dataset.id);
    requestUserInfo(userDetail);
  }


  function requestUserInfo(elem) {
    fetch(url + '/' + elem.id)
      .then((resp) => resp.text())
      .then((user) => showUserDetail(user));
  }


  function showUserDetail(user) {
    console.log(user);
    const div = document.createElement('div');
    div.innerHTML = userInfoTemplate.replace(`{{info}}`, user);
    userContainer.append(div);
  }



  function addUsers() {
    console.log(data);
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement('li');
      li.classList.add(USER_ITEM_CLASS);
      li.setAttribute('data-id', data[i].id);
      li.innerHTML = usersTemplate.replace(`{{user}}`, data[i].username)

      fragment.append(li);
    }
    userList.append(fragment);

  }

  addUsers();
}
