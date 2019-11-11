// Функция calculator
// Написать функцию calculator, которую можно будет использовать следующим образом

// const calculator = createCalculator(10); 
// calculator.add(45) // возвращает 55 
// calculator.sub(45) // возвращает 10 
// calculator.divide(5) // возвращает 2 
// calculator.mult(5) // возвращает 10 
// calculator.set(100) // устанавливает базовое значение в 100 
// calculator.mult(5) // возвращает 500
// Сдать задание

//---------------------------------------------------------------




'use strict';


function createCalculator(value = 0) {

  let count = value;

  function add(num = 0) { return count  += num; }
  function sub(num = 0) { return count -=  num; }
  function divide(num = 0) { return count /= num; }
  function mult(num = 0) { return count *= num; }
  function set(num = 0) { return count = num; }

  return {
    add,
    sub,
    divide,
    mult,
    set,
  }

}

const calculator = createCalculator(10);
console.log(calculator.add(45));
console.log(calculator.sub(45));
console.log(calculator.divide(5));
console.log(calculator.mult(5));
console.log(calculator.set(100));
console.log(calculator.mult(5));