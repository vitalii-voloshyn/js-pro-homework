// 1) Спрашиваем у пользователя как его зовут и заполняем h1 текстом Hello, <name>!

// 2) Спрашиваем у пользователя последовательность чисел через запятую (Н-р 1,5,3,4,3)

// 3) Среди введенных чисел нужно найти максимальное и минимальное

// Максимальное нужно записать в div#max, минимальное в div#min


// Задание со звездочкой

// Добавить валидацию, что на втором шаге пользователь ввел числа и там нет ничего постороннего. Если пользователь ошибся min и max не считаем, а в дивах делаем фон красного цвета





// У меня возникли проблемы с проверкой на число, она рабатает через раз...
// Я не стал ее внедрять в код, а зокоментировал в низу под кодом.


'use strict';


// 1

/*
// Узнаем имя 
function getName() {
  let userName;
  let greeting = document.querySelector('h1');
  userName = prompt('What is your name?', '');
  return isValidName(userName) ? greeting.innerHTML += ' Hello! ' + userName
    : getName();
}



// Валидация для имени и чисел
function isValidName(value) {
  return !(value === '' || value === null);
}

function isValidNumber(value) {
  return !(value === '' || value === null);
}


// Получаем числа от пользователя числа
function getNumber() {
  let arrNumber;
  let userNumber;
  userNumber = prompt('Enter numbers separated by comma Please!', '');
  arrNumber = userNumber.split(',').map(Number);
  return !isValidNumber(userNumber) ? getNumber()  : arrNumber;
}


// Находим максимальное и минимальное
function findMaxNumber(value) {
  let max = document.querySelector('#max');
  let maxNumber = value.reduce((min, max) => {
    return (max > min ? max : min)
  });
  return max.innerHTML += maxNumber;
}


function findMinNumber(value) {
  let min = document.querySelector('#min');
  let minNumber;
  minNumber = value.reduce((min, max) => {
    return (min < max ? min : max);
  });
  return min.innerHTML += minNumber;
}




let greetingUser = getName();
let userNumbers = getNumber();
let maxNumber = findMaxNumber(userNumbers);
let minNumber = findMinNumber(userNumbers);


*/
//============================================================

/*
function getNumber() {
  let arrNumber;
  let userNumber;
  let elements = document.querySelectorAll('div');
  userNumber = prompt('Enter numbers separated by comma Please!', '');
  if (!isValidNumber(userNumber)) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.background = 'red';
    }
    return getNumber();
  }
  arrNumber = userNumber.split(',').map(Number);
  return  arrNumber;
}
*/

//===================================================================


// SOLUTION HOMEWORK BY ALEX:


const minElem = document.querySelector('#min');
const maxElem = document.querySelector('#max');
const userName = getUserName();

printGreeting(userName);

const userNumbers = getUserNumbers();

if(numbersValid(userNumbers)){
  const values = getMinMaxValues(userNumbers);
  printMinMaxValues(values);
}else{
  printError();
}



function getUserName() {
  let value;
  do {
    value = prompt('What is your name?', '');
    value = value && value.trim();
  } while (!value);
  return value;
}


function printGreeting(name) {
  document.querySelector('#greeting').innerHTML += 'Hello' ;
}


function getUserNumbers() {
  let value;
  do {
    value = prompt('Enter numbers separated by comma', '');
    value = value && value.trim();
  } while (!value);
  return value.split(',').map(Number);
}


function numbersValid(nums) {
  return !nums.some(isNaN);
}


function getMinMaxValues(nums) {
  nums.sort((a, b) => a - b)
  return {
    min: nums[0],
    max: nums[nums.length - 1]
  }
}

function printMinMaxValues(values){
  minElem.innerHTML = `Min value:  ${values.min}` ;
  maxElem.innerHTML = `Max value:   ${values.max}` ;
}

function printError(){
  maxElem.innerHTML = 'ERROR';
  maxElem.classList.add('error');
}