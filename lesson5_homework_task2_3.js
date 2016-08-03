// ###Задача 2
//
// Напишите функцию smartSum, которая:
// * Принимает произвольное количество аргументов;
// * Возвращает сумму всех переданных ей аргументов;
// * Принимает за 0 любой аргумент, который не может быть преобразован в числовой тип (т.е при попытке его парсить возвращается NaN);
// * Может быть вызвана неограниченное количество раз;
function smartSum() {
    var res = 0;
    var forEach = [].forEach;
    forEach.call(arguments, function (f) {
        res += f;
    });
    return (function Sum() {
        forEach.call(arguments, function (f) {
            res += f;
        });
        Sum.toString = function () {
            return res;
        };
        return Sum;
    })();
};

console.log("task2");
console.log("" + smartSum(3));                            // 3; concat => explicit .toString();
console.log("" + smartSum(1, 2));                         // 3; equal alert(smartSum(1,2);
console.log("" + smartSum(1, 3)(2));                      // 6;
console.log("" + smartSum(1, 2)(3, 4, 5)(6)(7, 10));      // 38;


// ### Задача 3
//
// Сделайте таймер обратного отсчета, который выполняет обратный отсчет от зданого числа до нуля.
//     Когда доходит до нуля - выводит сообщение о том, что отсчет закончен.
//
//     Например, var timer=10, каждую секунду на странице меняется числа - 10, 9, 8... и так далее до нуля.

function myTimer(arg) {
    var counter = arg;

    return setInterval(function () {

        console.log(counter);
        if (counter == 0) {
            clearInterval(this);
            console.log("timer is over");
        }
        counter--;

    }, 1000);
}

console.log("task3, timer(5)");

var countdown = 5;

myTimer(countdown);

setTimeout(function () {
    myTimer(countdown * 2);
}, countdown * 1000 + 300);
