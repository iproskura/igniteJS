// Задача 1.
// Каков будет результат выполнения этого кода?

var value = 0;
function f() {
    if (1) {
        value = true;
    } else {
        var value = false;
    }
    console.log(value);       //true
}
f();

// Изменится ли внешняя переменная value @1 ? Как изменится рузультат, если из строки var value = false убрать ключевое слово var \2\?
// ответ:
// @1 нет, локальная переменная ;
// @2 true из глобальной переменной.


// Задача 2.
// Напишите функцию, возвращающую количество собственных вызовов.

function callCounter() {
    var count = 0;
    return function () {
        return ++count;
    }
};

var counter = callCounter();

console.log(counter());         //1
console.log(counter());         //2
console.log(counter());         //3


//     Задача 3.
// Следующий код создает массив функций-стрелков shoooters. По замыслу, каждый стрелок должен выводить свой номер:

function makeArmy() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {

        // original func
        // var shooter = function() {      // функция-стрелок
        //     alert( i );                 // выводит свой номер
        // };

// Сейчас все функции-стрелки выводят 10 вместо своего номера. Поправьте код, чтобы при вызове каждой из них она выводила
// свой номер(индекс в массиве). Предложите несколько вариантов.

        // alt.1
        // var shooter = function aFun() {
        //     console.log(aFun.i);
        // };
        // shooter.i = i;

        // alt.2
        var shooter = function (i) {
            return function () {
                console.log(i);
            };
        }(i);
        // endof alt.2

        shooters.push(shooter);
    }
    return shooters;
}
var army = makeArmy();

army[0]();                                  // стрелок выводит 10, а должен 0
army[5]();                                  // стрелок выводит 10, а должен 5.



