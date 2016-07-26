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
        if (obj.hasOwnProperty(i) && (typeof obj[i] === "string")) {            // string case
            count++;
        } else if (obj.hasOwnProperty(i) && Array.isArray(obj[i])) {            // array case
            for (var j in obj[i]) {
                if (typeof obj[i][j] === "string") {
                    count++;
                }
            }
        } else if (obj.hasOwnProperty(i) && (typeof obj[i]) === "object") {     //object case goes recursive
            count += strCount(obj[i]);
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
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: {name: "vasya", surname: "petrov"}
};

var obj3 = {
    name: "vasya",
    surname: "petrov"
};

console.log(strCount(obj1));        // should be 3
console.log(strCount(obj2));        // should be 5
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

console.log(add(5)(3));
