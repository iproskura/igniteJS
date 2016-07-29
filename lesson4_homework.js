// TODO ###Задача 1
//
// Представьте, что в JavaScript нет метода call, есть только метод apply. Используя apply, напишите метод call.

function myCall() {
    arguments.splice = [].splice();


};

// showFullName.call(user, 'firstName', 'surname');
// showFullName.apply(user, ['firstName', 'surname']);


// TODO ###Задача 2
//
// Напишите функцию compose, которая принимает значение в качестве основного параметра и
// произвольное количество функций в качестве дополнительных параметров.
//     Функция должна вернуть значение, полученное путем использования основного параметра как аргумента для функций,
// переданных ей в качестве дополнительных аргументов.

// func2 ( func1 ( arg ));
//
// function compose() {
//
//     if (arguments.length == 1){
//         return arguments[0];
//     }else {
//
//
//
//     }
// }

// Например:
var doubleTheValue = function (val) {
    return val * 2;
};
var addOneToTheValue = function (val) {
    return val + 1;
};

// console.log(compose(5));                          //должно вернуться значение 5
// console.log(compose(5, doubleTheValue));                          //должно вернуться значение 10
// console.log(compose(5, doubleTheValue, addOneToTheValue));       // должно вернуться значение  11

// Если функции передан только один параметр, она должна вернуть его значение.


// TODO ### Задача 3
//
// Создайте декоратор makeLogging(f, log), который принимает в качестве аргумента функцию f и массив log.
//     Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log,
// а затем передает вызов в f.
//     В этой задаче можно считать, что у функции f ровно один аргумент.


function work(a) {
    /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {

}


//     Работать должно так:
var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    console.log('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}

