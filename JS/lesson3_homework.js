// ###Задача 1
// Напишите функцию sum, которая будет работать как показано в примере ниже:

function sum(a) {
    var result = a;

    function func(b) {
        result += b;
        return func;
    }

    func.toString = function () {
        return result;
    };

    return func;
};


console.log(sum(1)(2) == 3);                       // 1 + 2
console.log(sum(1)(2)(3) == 6);                    // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);

// Количество скобок может быть любым.


// ###Задача 2
// Напишите функцию runString, которая:
// 1)принимает 2 аргумента:
//     * arg:  аргумент любого типа
// * объект со свойствами:
//     1. param: строка.
//     2. func: строка, содержащая код функции.
//
// 2) выполняет код функции func, переданной ей в качестве аргумента, с параметром arg.
//     Например:
// ``` console.log(runString(arg, obj));              // we expect it should return 2 which is a result of square root of 4

function runString(arg, obj) {

    var sqrt = new Function(obj.param, obj.func);
    return sqrt(arg);
}

var arg = 4;                         // аргумент для функции runString

var obj = {
    param: 'num',                  // имя параметра для функции в свойстве func
    func: 'return Math.sqrt(num)'  // функция, которая должна быть вызванв с  агрументом arg
};

console.log();
console.log("task 2");
console.log(runString(arg, obj));
console.log(runString(9, obj));




// ### Задача 3.
// Есть объект ladder
//     ```
// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//   }
// };
// ```
// Сейчас, для последовательного вызова нескольких методов объекта, нужно вызывать каждый из них отдельно:
//     ```
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ```
// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:
//     ```
// ladder.up().up().down().up().down().showStep(); // 1
// ```

var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        console.log(this.step);
        return this;
    }
};

console.log();
console.log("task3");
ladder.up().up().down().up().down().showStep();     // 1
