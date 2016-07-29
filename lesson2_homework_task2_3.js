// Задача 2.
//
// Создайте функцию strCount, которая принимает один аргумент (объект) и считает количество свойств строкового типа.
//
//     Например:
//
// strCount({
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime",2,3,4],
//     fifth:  null
// })
//возвращает 3

var strCount = function (obj) {
    var count = 0;
    for (var i in obj) {

        if (typeof obj[i] === "string" && obj.hasOwnProperty(i)) {
            count++;
        }
        else if (typeof obj[i] === "object" && obj.hasOwnProperty(i)) {
            count += strCount(obj[i]);
        }
        else if (Array.isArray(obj[i]) && obj.hasOwnProperty(i)) {
            for (var j in obj[i]) {
                count += strCount(obj[i][j]);
            }
        }
    }
    return count;
};



var obj1 = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null
};

var obj2 = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4, {name: "fizz", surname: "buzz"}],          // obj in arr
    fifth: null,
    sixth: {name: "vasya", surname: "petrov", midname: ["str", "euo", 10]}  // arr in obj
};

var obj3 = {
    name: "vasya",
    surname: "petrov"
};


console.log("task 2");
console.log(strCount(obj1));        // should be 3
console.log(strCount(obj2));        // should be 9
console.log(strCount(obj3));        // should be 2


// Задача 3.
//
// Напишите функцию, которая складывает числа при двойном вызове. Например:
// add(3)(4)  // 7

function add(a) {
    return function (b) {
        return a + b;
    }
}

console.log("task 3");
console.log(add(5)(3));
