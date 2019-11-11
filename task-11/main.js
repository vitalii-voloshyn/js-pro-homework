// Написать функцию конструктор Student, которую я смогу использовать вот так:

// const students = [ 
//   new Student('Student 1', [10,9,8,0,10]), // имя, оценки
//   new Student('Student 12', [10,0,8,0,3,4])
//  ];
// У каждого студента должен быть методы

// averageMark() - возвращает среднюю оценку


// Дополнительное задание

// Также написать функцию (не метод!)

// averageMark() - которая возвращает среднюю оценку по группе



'use strict';


function Students(name, marks) {
  this.name = name;
  this.marks = marks;
}


Students.prototype.averageMark = function averageMark() {
  let total = this.marks.reduce((accum, current) => (accum + current),0);
  return +(total / this.marks.length).toFixed(1);
};



function getAverageMarkGrup(students) {
  const counterMarks = students.reduce((accum, current) =>
    accum + current.averageMark(),0);
  return +(counterMarks / students.length).toFixed(1);
}



const students = [
  new Students('student 1', [10, 9, 8, 0, 10]),
  new Students('student 12', [10, 0, 8, 0, 3, 4])
];


console.log(students[1].averageMark());
console.log(getAverageMarkGrup(students));
//----------------------------------

