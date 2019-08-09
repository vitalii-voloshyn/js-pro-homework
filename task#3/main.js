// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (add, sub, mult, div). Спрашиваем до тех пор пока он введет допустимое значение

// 2) спрашиваем сколько операндов он хочет использовать. Это должно быть число больше ноля, меньше 5. Спрашиваем пока пользователь не введет допустимое значение

// 3) спрашиваем у пользователя каждый операнд. Это должно быть число. Спрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert выводим результат действия (add, sub, mult, div) со всеми операндами



// Решение:
//-------------------------
// function add() {     
//   return num + num;
// };
//--------------------------
// Спрашеваем какое действие выполнять
 let answer = prompt('What do you want, add,sub,muit, or div?', '');

 while (answer == '' || answer == null) {
   answer = prompt('select action!', '');
   
 };


// Количество орерандов 
 let operands = prompt('How many operands do you want to use?', 'Enrer from 1 to 5');

  for (;operands == 0 || operands > 5;operands++) {
   operands = prompt('Enrer from 1 to 5', '');
 };



// Вводим операнды

let num = [];

if (operands == 4) {
  for (let i = 0;i < operands;i++) {
   num +=  prompt('Enter operand!');
  }
}else if (operands == 3){
  for (i = 0;i < 3;i++){
  num += prompt('Enter operand!');
  }
}else if (operands == 2) {
  for (;i < 2;i++) {
  num += prompt('Enter operand!');
  }
}else if (operands == 1) {
  for (;i < 1;i++) {
  num += prompt('Enter operand!');
  }
};


// console.log(num);


//Вычисляем ...



//-----------------------------------------------------------------
// let num = prompt('Enter operand!');
// for (let i = 0;i <=num;i++) {
//   prompt('Enter operand!','');
// }

//  for (  let answer2 = 0;  answer2 <= operands; answer2++) {
//      answer2 = prompt('Enter operand!', '');
//    };
//    alert(answer);
//----------------------------------------------------------------


// Я запутался в том  как выввести на каждый операнд свой prompt, где хранить полученое число, и потом как осуществить  вычесления с ними... 















 
 


















 


 