// Калькулятор получше

// 1) Спрашиваем у пользователя какое действие он хочет сделать add, sub, div, mult

// 2) Спрашиваем у пользователя первый аргумент

// 3) Спрашиваем второй аргумент

// 4) Выполняем дейтсвие и выводим результат

// Каждое действие должной быть в отдельной функции и в зависимости от выбора пользователя мы должны выполнить соответствующую функцию


//Решение:

'use strict';
 

//-------------------------------- Variant 2 ---------------------
//1 Спрашеваeм действие у пользователя

 function getOperator() {
  let operator = prompt('Chouse operator, add,sub,div,mult', '');
  if(operator !== 'add' &&
     operator !== 'sub' &&
     operator !== 'div' &&
     operator !== 'mult') {
       alert('Enter right action!');
       return getOperator()   
   }
    return operator;
 };


//2 Спрашеваем первый  аргумент 
//3 Спрашеваем второй аргумент
// Look at dowm comments how it made! 

function getArgument(argumentIndex) {
  let argument;
  do{
    argument = +prompt('Enter first operand!',+ argumentIndex + '');
  }while(isNaN(argument) ||
          argument <=0
  )
  return argument;
};


// Выполняем действие и выводим результат

function calculate(argument1, argument2, operator) {
  let result ;
  switch(operator){
    case 'add': result = argument1 + argument2;break;
    case 'sub': result = argument1 - argument2;break;
    case 'div': result = argument1 / argument2;break;
    case 'mult': result = argument1 * argument2;break;
  }
  return result;
}

  let operator  = getOperator();
  let argument1 = getArgument(1);
  let argument2 = getArgument(2);
  let result    = calculate(argument1, argument2, operator);

alert('Result' + ' = ' + result);

  //----------------------------




// Homework number for Variant 1
//-------------------------------------------------

/*

let operator;
let argumentA = null;
let argumentB = null;
// let result = null;

//1 Ask what user does want to do?

do {
   operator = prompt('Chouse operator add,sub,div,mult?', '');
}while(operator != 'add' &&
       operator != 'sub' &&
       operator != 'div' &&
       operator != 'mult' 
)


//2 Enter arguments ------------------------------
do{
  argumentA = +prompt('Enter first operand!', '');
  }while(isNaN(argumentA) ||
          argumentA <=0
)

do{
  argumentB = +prompt('Enter second operand!', '')
 }while(isNaN(argumentB) ||
        argumentB <=0
)


  //-----------declared function------------------------
 function add(a,b){
   return  a + b;
  };
 
 function sub(a,b){
   return a - b;
 };

 function div(a,b){
   return a / b;
 };

 function mult(a,b){
   return a * b;
 };


 //------------- Calculate----------------------------
switch(operator){
  case 'add': alert('Result' + ' = ' + add(argumentA, argumentB));
  break;
  case 'sub': alert('Result' + ' = ' + sub(argumentA, argumentB));
  break;
  case 'div': alert('Result' + ' = ' + div(argumentA, argumentB));
  break;
  case 'mult': alert('Result' + ' = ' + mult(argumentA, argumentB));
  break;
};

*/


//-------------------------------------------------------------


// Modernized finction getArgument...

/*
//2 Спрашеваем первый аргумент 
function getArgument1() {
  let argument1 = +prompt('Enter first operand!', '');
  if(isNaN(argument1) ||
      argument1 <=0
  ){
    alert('Enter a number!!');
    return getArgument1()
  }
  return argument1;
}

//3 Спрашеваем второй аргумент
function getArgument2() {
  let argument2 = +prompt('Enter second operand!', '');
  if(isNaN(argument2) ||
      argument2 <=0
  ){
    alert('Enter a number!!');
    return getArgument2()
  }
  return argument2;
}

// ----------------  SOLUTION ---------------------

// function getArgument(argumentIndex) {
//   let argument;
//     do{
//       argument  = +prompt('Enter operand!', + argumentIndex +  '');  
//      }while(isNaN(argument) ||
//             argument <=0
//      )
//   return argument;
// }

// С помощью аргумента (argumentIndex) в prompt видно счет введенных операндов.
// Для этого при вызове функции указваем аргумент 1, и 2.  

// Цикл do...while,  будет выполнять prompt, пока в while(условие true)
// Когда условие нарушится, а именно в prompt введем число..
// isNaN - соответствует строке а число нет поэтому цикл розарвется
// Сработает return argument - и мы получит значение с prompt!


// console.log( getArgument(1));
// console.log(getArgument(2));

// let argument1 = getArgument(1);
// let argument2 = getArgument(2);

//----------------------------------------------------------------

*/









