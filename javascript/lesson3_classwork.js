// ###Задача 1
// Почему первое равенство – неверно, а второе – верно?
//     ```
// alert( [] == [] ); // false
// alert( [] == ![] ); // true
// ```
//     Какие преобразования происходят при вычислении?

// ОТВЕТ:

// массив - объект, два массива - два разных объекта.

// 1: логическое отрицаниек ко второму массиву ![]  => false  ;
// 2: приведение объекта слева к примитиву. [].toString => '';
// 3: ('' == false) численное преобразование => (0 == 0) - истина



// ###Задача 2
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
//     * Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// * Метод sum() возвращает сумму двух значений принятых от пользователя.
// * Метод mul() возвращает произведение двух значений принятых от пользователя.

function Calculator() {

    this.read = function () {
        this.a = +prompt('a?', "0");
        this.b = +prompt('b?', "0");

    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    }
}

//     Пример использования:

var calculator = new Calculator();
calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());


//
// ###Задача 3
// Напишите функцию-конструктор Summator, которая создает объект с двумя методами.
// * Метод sum(a,b) возвращает сумму двух значений;
// * Метод run() запрашивает два значения при помощи prompt и выводит их сумму, используя метод sum.
//     В итоге вызов new Summator().run() должен спрашивать два значения и выводить их сумму.

function Summator() {

    this.sum = function (a, b) {
        return a + b;
    };

    this.run = function () {
        this.a = +prompt("a?", "0");
        this.b = +prompt("b?", "0");

        console.log(this.sum(this.a, this.b));
    }
}

var summ = new Summator();
console.log(summ.sum(2, 3));
console.log(summ.run());
