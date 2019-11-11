
// функция ReplaceAll
// Написать функцию replaceAll, чтобы ее можно было использовать следующим образом


// replaceAll('Hello world', 'l', 'z'); // функция должна вернуть Hezzo worzd

// функция должна проверять что второй и третий аргументы имеют только один символ и если // это не так, сообщать об этом

// Solution:

'use strict';


//------------Variant 1 --------------------------------------


// function replaceAll(argument1,argument2,argument3){
//   let newArgument = argument1.replace(/ll/gi, 'zz') ;
//    return (argument2.length == 1 &&
//            argument3.length == 1
//      ) ? newArgument : alert('Too much symbols!') ;
//  }

//  let result = replaceAll('Hello world', 'l','z');
//  console.log(result);





//------------------- Variant 2 --------------------
/*
function replaceAll(argum1,argum2,argum3){
  let newArgument = argum1.replace('Hello world','Hezzo worzd');
  
  return (argum2.length == 1 &&
    argum3.length == 1
    ) ?  newArgument : alert('Too much symbol'); 
  }
  
  let result = replaceAll('Hello world', '1', 'z');
  console.log(result); 
  */
 
 
 //==============================================================
 
 
 // Правельное решение Right Solution
 //----------------------------------------------
 
 function replaceAll(str,findChar, replaceChar){
   if(findChar.length !== 1 || replaceChar.length !== 1){
     console.warn('warning argument');
      return str;
   }

      str = str.replace(findChar, replaceChar);
 
   return str.indexOf(findChar) >= 0 ? replaceAll(str,findChar,replaceChar) : str;
 }
 
 let result = replaceAll('Hello world', 'lgh', 'z');
 console.log(result);