// ###Задача 1.
// Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.
//     ```
// Создайте пустой объект user.
// Добавьте свойство name со значением Вася.
// Добавьте свойство surname со значением Петров.
// Поменяйте значение name на Сергей.
// Удалите свойство name из объекта.

var user = {};
user.name = "Vasya";
user.surname = "Petrov";
user.name = "Sergey";

delete  user.name;


// ###Задача 2.
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

var isEmpty = function (obj) {
    return JSON.stringify(obj) === '{}';    // or  return Object.keys(obj).length === 0;
}

var obj1 = {};
var obj2 = {name: "vasya"};
var obj3 = {name: "aoeu", surname: "dhtns"};

console.log(isEmpty(obj1));                 // true
console.log(isEmpty(obj2));                 // false
console.log(isEmpty(obj3));                 // false


// ###Задача 3.
// Дан массив чисел: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
// 1) Найдите максимальное и минимальное значение массива.
// 2) Все положительные и четные числа запишите в другой массив.
//     Результаты выведите на экран.

var arr = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];

console.log(Math.min.apply(null, arr));     //min
console.log(Math.max.apply(null, arr));     //max


arr.sort(function (a, b) {                  // or sort
    return a - b;                           // and
});
// min
console.log((arr[0]));                      // max
console.log((arr[arr.length - 1]));


var positiveArr = arr.filter(function (number) {
    return (number > 0) & (number % 2 == 0);
});

console.log(positiveArr);                   //or document.write(positiveArr);



