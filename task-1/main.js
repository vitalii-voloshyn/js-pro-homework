// Домашнее задание 1
// Добавлено: 29.07.2019 22:55
// Переменные и типы данных
// Создать три переменные - объекта (трех студентов).

// У каждого студента есть имя и рост



// Создать еще одну переменную в которую положить результат вычисления среднего роста студентов



// С помощью console.log вывести поочередно для каждого студента имя и рост.

// Затем вывести значение переменной, в которой хранится средний рост.


let student1 = {
  name:'Петя',
  height: 170
};

let student2 = {
  neme:'Вася',
  height: 190
};

let student3 = {
  neme: 'Оля',
  height: 160
};




let averageHeight = (student1.height + student2.height + student3.height) / 3;
   

    console.log(student1.name, student1.height);
    console.log(student2.name, student2.height);
    console.log(student3.name, student3.height);
    console.log(averageHeight);

