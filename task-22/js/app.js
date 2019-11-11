

// Вверху страницы находится автокомплит. Когда пользователь вводит больше двух символов, отправляется запрос на https://api.github.com/search/users?q={{serchWord}} , где {{serchWord}} - это то что ввел пользователь.

// Например, для введенного agriba запрос будет https://api.github.com/search/users?q=agriba

// Когда пользователь выбирает один из вариантов из списка внизу отображается информация о выбраном пользователе

// Данные для пользователя берем из запроса https://api.github.com/users/{{login}} , где логин - это логин выбраного пользователя

// Н-р для пользователя agribanov url будет https://api.github.com/users/agribanov

// Ссылка в заголовке ведет на профиль пользователя на гитхабе.

// Обратите внимание на даты регистации, ее нужно отформатировать день-месяц-год


// Для выполнения вам понадобится:
// автокомплит из jqueryui https://jqueryui.com/
// jquery ajax https://jquery.com/
// Date https://learn.javascript.ru/datetime и https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date

// Задание легкое, но с автокомплитом есть подводные камни, чтобы заставить его сделать правильный запрос и показать в списке то что вам нужно. Не бойтесь почитать внимательно документацию и погуглить

// ----------------- SOLUTION ----------------------//


'use strict';


$(function () {
  const DATA_URL = `https://api.github.com/search/users?q=`;
  const USER_URL = `https://api.github.com/users/`;
  const userInfoElement = $('#user-info');
  const userInfoTemplate = $('#userInfoTemplate').html();


  $("#searchUser").autocomplete({
    source: function (request, response) {
      getData(request).then(response);
    },
    minLength: 2,
    select: function (event, ui) {
      fetch(`${USER_URL}${ui.item.value}`)
        .then(resp => resp.json())
        .then(data => renderUserDetail(data))
    }
  }
  );

  function getData(request) {
    return fetch(`${DATA_URL}${request.term}`)
      .then(resp => resp.json())
      .then(data => data.items.map(item => item.login))
      .catch(error => console.warn(error))
  }

  function renderUserDetail(data) {
    const userHtml = getuserItemHtml(data)
    userInfoElement.html(userHtml);
  }

  function getuserItemHtml({ avatar_url, name, html_url, followers, created_at }) {
    return userInfoTemplate.replace(`{{img-url}}`, avatar_url)
                           .replace(`{{name}}`, name)
                           .replace(`{{user-url}}`, html_url)
                           .replace(`{{followers}}`, followers)
                           .replace(`{{date}}`, changeDateformat(created_at))

  }

  function changeDateformat(date) {
    return new Date(Date.parse(date)).toLocaleDateString('ru-RU');
  }


});

