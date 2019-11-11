// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (add, sub, mult, div). Спрашиваем до тех пор пока он введет допустимое значение

// 2) спрашиваем сколько операндов он хочет использовать. Это должно быть число больше ноля, меньше 5. Спрашиваем пока пользователь не введет допустимое значение

// 3) спрашиваем у пользователя каждый операнд. Это должно быть число. Спрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert выводим результат действия (add, sub, mult, div) со всеми операндами



// Решение:

// Спрашеваем какое действие выполнять
//  let answer = prompt('What do you want, add,sub,muit, or div?', '');
//      ansver = 0;
//  while (answer == 0 || answer == null ) {
//    answer = prompt('select action!', '');
   
//  };


// // Количество орерандов 
//  let operands = prompt('How many operands do you want to use?', 'Enrer from 1 to 5');

//   for (;operands == 0 || operands > 5;operands++) {
//    operands = prompt('Enrer from 1 to 5', '');
//  };

// // Вводим операнды

// if (operands == 4) {
//   for (let i = 0;i < operands;i++) {
//    num +=  prompt('Enter operand!');
//   }
// }else if (operands == 3){
//   for (i = 0;i < 3;i++){
//   num += prompt('Enter operand!');
//   }
// }else if (operands == 2) {
//   for (;i < 2;i++) {
//   num += prompt('Enter operand!');
//   }
// }else if (operands == 1) {
//   for (;i < 1;i++) {
//   num += prompt('Enter operand!');
//   }
// };

// ---------------------------------------------------------------



//-----------------------------------------------------------------


// Решение в классе:
'use strict';
//1 

let operator;
let operandsCount;
let operand;
let result = null;


do {
  operator = prompt('Chouse operator!', '');
}while(operator != 'add' &&
       operator != 'sub' &&
       operator != 'mult' &&
       operator != 'div'  
);



//2 Ask how many operands?

do {
  operandsCount = +prompt('How many operands do you want to use?', '');
}while (isNaN(operandsCount) || 
operandsCount <=0 ||
operandsCount >=5   
);
console.log(operandsCount);

//3  
 for (let i = 1; i!=operandsCount;i++){
   do{ 
     operand = +prompt('operand' + i, '0');
   }while(isNaN(operand))

   if (result === null ) {
    result = operand;
    continue;
 } 

 switch(operator) {
  case 'add': result += operand;break;
  case 'div': result /= operand;break;
  case 'mult': result *= operand;break;
  case 'sub': result -= operand;break;
 }

};
alert('Result' + '=' + result); 








 
 


















 


 