// ###Задача 1
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

//-----------------------------------------
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


//----------------------------------------------
// ###Задача 3
// Напишите функцию, которая принимает один аргумент и возвращает его тип данных.
// Выполните обработку исключений в случае передачи двух и больше аргументов.
function oneArg(arg) {
    try {
        if (arguments.length > 1) {
            throw new Error("More than one arg");
        }
            return typeof arg;
    } catch (e) {
        console.log('error ' + e.message);
    }
};


function task3() {
    console.log("task 3 : ");
    console.log("10 : " + oneArg(10));                         // 'number'
    console.log("false : " + oneArg(false));                  // 'boolean'
    console.log("'Hello' : " + oneArg("Hello"));              // 'string'
    console.log("undefined : "  + oneArg(undefined));          // 'undefined'
    console.log("null : " + oneArg(null));                    // 'object'
    console.log("[].slice : " + oneArg([].slice));            // 'function'
    console.log("{} : " + oneArg({}));                        // 'object'
    console.log("[] : " + oneArg([]));                        // 'object'
    console.log("Date obj : " + oneArg(new Date));            // 'object'
}

setTimeout(task3, 2200);                    //timer to wait task 1
