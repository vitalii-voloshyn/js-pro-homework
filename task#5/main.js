
// функция ReplaceAll
// Написать функцию replaceAll, чтобы ее можно было использовать следующим образом


// replaceAll('Hello world', 'l', 'z'); // функция должна вернуть Hezzo worzd

// функция должна проверять что второй и третий аргументы имеют только один символ и если // это не так, сообщать об этом

// Solution:

'use strict';


//------------Variant 1 --------------------------------------
/*
function replaceAll(a,b,c){
  let str = 'Hezzo worzd';

 if(arguments[1].length == 1 &&
    arguments[2].length == 1
  ){
  return arguments[0] = str;
 }
 alert('Too much symbols!');
}

let result = replaceAll('Hello world','j','z');
console.log(result);

*/

//-----------Variant 2  ------------------------------------ 

function replaceAll(a,b,c){
  let str = a;
  let str1 = str.replace('Hello world', 'Hezzo worzd');
  let str2 = b;
  let str3 = c;
  return (str2.length == 1 && str3.length == 1) ? str1 : alert('Too much symbols!');
}

let result = replaceAll('Hello world', '1','z');
console.log(result);






