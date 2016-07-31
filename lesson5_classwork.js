// TODO ###Задача 1
//
// Напишите функцию printNumber, которая последовательно выводит в консоль числа от 1 до 20,
// с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс,
// в течение которых каждые 100мс в консоли появляется очередное число.


function myTimer() {
    var counter = 1;
    return setInterval(function () {

        console.log(counter);
        if (counter >= 20) {
            clearInterval(this);
            console.log("timer is over");
        }
        counter++;

    }, 100);
}

console.log("task1");

myTimer();


//  ###Задача 2
//
// Превратите объект leader из примера ниже в JSON:
//     ```
var leader = {
    name: "Василий Иванович",
    age: 35
};

var val = JSON.stringify(leader);

// После этого конвертируйте получившуюся строку обратно в объект.

leader = JSON.parse(val);


// TODO ###Задача 3
// Напишите функцию, которая принимает один аргумент и возвращает его тип данных.
// Выполните обработку исключений в случае передачи двух и больше аргументов.
function oneArg() {

}
