// ###Задача 1
//
// Напишите функцию sumArgs, которая суммирует все свои аргументы. При решении задачи используйте метод call или apply.
function sumArgs() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    })
}

console.log("task 1");
console.log(sumArgs(4, 5, 6));       //15



// ###Задача 2
//
// Перепишите с использованием встроенного метода bind:
// свой бинд
function bind(func, context) {
    return function () {
        return func.apply(context, arguments);
    };
}
//

var user = {
    firstName: "Вася",
    sayHi: function () {
        console.log(this.firstName);
    }
};

var g = bind(user.sayHi, user);      // через свой бинд

var f = user.sayHi.bind(user);          // через встроенный

console.log("task2");
g();
f();


// ###Задача 3
//
// Напишите функцию joinArgs, которая выводит свои аргументы, разделенные символом  ‘*’ на экран в виде строки.
//     Используйте прием “одалживания методов”.  У вас должно получиться:
//     ```

function joinArgs() {
    arguments.join = [].join;
    console.log(arguments.join("*"));
}

joinArgs(1, 2, 3);// 1*2*3
joinArgs("hello", "world", "!"); // hello*world*!
// ```
