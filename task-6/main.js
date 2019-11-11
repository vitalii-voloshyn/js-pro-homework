// 1. Даем пользователю ввести число, проверяем что это действительно число.

// После этого выводим сколько в этом числе четных цифр.

// Например 1234 должно показать 2, 1111 - ноль

//--------------------------------------------------------------

// 2. Даем пользователю ввести число от 0 до 10.

// С помощью рандома генерируем случайное число. Если введенное пользователем число совпало с нашим, начисляем ему 10 баллов.

// После этого спрашиваем хочет ли он продолжать и повторяем с самого начала

//-------------------------------------------------------------------------

// 3.Написать функцию которая будет делать полную (с учетом вложенностей) копию объекта. Ожидаю что использовать ее можно будет так:

// const obj = {name: 'Alex', age: 33, adress: { country: 'UA', city: 'Dnipro}}

// const objCopy = copy(obj);



'use strict';



// 1 Задача


function isValidNumber(value) {
  return !( isNaN(value) || value === '' || value === null);
}


function getNumber() {
  let number = prompt('Enter a number', '');

  return !isValidNumber(number) ||
    number == 0 ? getNumber() : number;

}


function getEvenNum(value) {
  let evenCount = 0;
  let arrNumber = value.split('').map(Number);

  for (let i = 0; i < arrNumber.length; i++) {
    if (value[i] % 2 == 0) {
      evenCount += 1;
    }
  }
  return evenCount;
}


let numbers = getNumber();
let result = getEvenNum(numbers);

alert('Even numbers' + ' - ' + result);





//---------------------------------------------------------------

// 2 Задача

/*

function randomNumber(min, max) {
  let generatedNum;

  generatedNum = Math.floor((Math.random() * (max - min) + min));

  return generatedNum;
}



function checkNumbers(generatedNum) {
  let userAnswer;
  let result = 0;
  let userNumber;

  do {
    userNumber = +prompt('Enter a number от 0 до 10', '');
    userNumber = parseInt(userNumber);
  } while (userNumber !== generatedNum ||
  isNaN(userNumber) ||
  userNumber === null ||
    userNumber > 10
  )

  if (userNumber === generatedNum) {
    result += 10;
    userAnswer = confirm('You Guess!!! Do you want try again?');
  }

  return (userAnswer !== true) ? alert('Result ' + result + ' points ') : location.reload();
}



let prNumber = randomNumber(0, 10);
let guessResult = checkNumbers(prNumber);


*/

//------------------------------------------------------

//-------------------------------------------------------

// 3 Задача

//.Написать функцию которая будет делать полную (с учетом вложенностей) копию объекта. Ожидаю что использовать ее можно будет так:

// const obj = {name: 'Alex', age: 33, adress: { country: 'UA', city: 'Dnipro}}

// const objCopy = copy(obj);

/*

const obj = {
  name: 'Alex',
  age: 33,
  address: {
    country: 'UA',
    city: 'Dnipro'
  }
};


function copy(obj) {

  let copyObj = {};

  for (let key in obj) {
    if (typeof (obj[key]) === 'object'
      && obj[key] !== null) {

      copyObj[key] = copy(obj[key]);

    } else {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
}


console.log(obj);
const objCopy = copy(obj);
console.log(objCopy);

*/



//============================================================


//------------------- Фукции  проверки  2й задачи -----------
/*
function getUserNum(){
  let userGuess;
  userGuess = +prompt('Guess a number!? Enter ', '0 - 10');
  userGuess = parseInt(userGuess)
  return  isValideNumber(userGuess) ? userGuess : getUserNum();
}
function isValideNumber(value){
   return !(isNaN(value) || value === '' || value === null || value > 10);
}
*/
//------------------ End Фукции из 2й задачи ---------------





// Размышления над 3й задачей

/*
function copy(obj){
 let copyObj = {};

 for(let key in obj){
   if(typeof obj[key] !== 'object'){
     copyObj[key] = obj[key];
   }else{

   }
}
return copyObj;
}

*/

// console.log(obj);
// const objCopy = copy(obj);
// console.log(objCopy);
// objCopy.name = 'Vasya';



//------------------------------------------------
/*
function copy(obj){
const copyObj = {};
  for(let key in obj){
     if(obj.hasOwnProperty([key])){
         Object.assign(copyObj, obj);
     }
     return copyObj;
   }
 }



 console.log(obj);
 const objCopy = copy(obj);
 console.log(objCopy);

*/





