// Калькулятор получше

// 1) Спрашиваем у пользователя какое действие он хочет сделать add, sub, div, mult

// 2) Спрашиваем у пользователя первый аргумент

// 3) Спрашиваем второй аргумент

// 4) Выполняем дейтсвие и выводим результат

// Каждое действие должной быть в отдельной функции и в зависимости от выбора пользователя мы должны выполнить соответствующую функцию


//Решение:

'use strict';

//-----------------Variant 1 --------------------
let operator;
let argumentA = null;
let argumentB = null;
// let result = null;

//1 Ask what user does want to do?

do {
   operator = prompt('Chouse operator add,sub,div,mult?', '');
   operator = operator.toLowerCase();
}while(operator != 'add' &&
       operator != 'sub' &&
       operator != 'div' &&
       operator != 'mult' 
)


//2 Enter arguments ------------------------------
do{argumentA = +prompt('Enter first operand!', '');
}while(isNaN(argumentA) ||
             argumentA <=0
)

do{argumentB = +prompt('Enter second operand!', '')
}while(isNaN(argumentB) ||
             argumentB <=0
)


  //-----------declared function------------------------
 function add(){
   return  argumentA + argumentB;
  };
 
 function sub(){
   return argumentA - argumentB;
 };

 function div(){
   return argumentA / argumentB;
 };

 function mult(){
   return argumentA * argumentB;
 };


 //------------- Calculate----------------------------
switch(operator){
  case 'add': alert('Result' + ' = ' + add());
  break;
  case 'sub': alert('Result' + ' = ' + sub());
  break;
  case 'div': alert('Result' + ' = ' + div());
  break;
  case 'mult': alert('Result' + ' = ' + mult());
  break;
};



//----------------------------------------------------
//--------------- Variant 2 ----------------------------

/*
let operator;
let argumentsCount = 3;
let argument = null;
// let argumentB = null;
// let result = null;



const add = function() {
  return argument + argument;
};
const sub = function() {
  return argument - argument;
};
const div = function() {
  return argument / argument;
};
const mult = function() {
  return argument * argument;
};



//1 Ask what user does want to do?

do {
   operator = prompt('Chouse operator add,sub,div,mult?', '');
   operator = operator.toLowerCase();
}while(operator != 'add' &&
       operator != 'sub' &&
       operator != 'div' &&
       operator != 'mult' 
);


//2 Enter operands
for(let i = 1;i < argumentsCount;i++) {
do{
  argument = +prompt(' Enter argument ' + i, '');
 }while(isNaN(argument) ||
        argument <= 0
 )
};


switch(operator){
  case 'add': alert('Result' + ' = ' + add());
  break;
  case 'sub': alert('Result' + ' = ' + sub());
  break;
  case 'div': alert('Result' + ' = ' + div());
  break;
  case 'mult': alert('Result' + ' = ' + mult());
  break;
};

*/

//--------------------------------------------------




