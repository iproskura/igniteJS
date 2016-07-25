// ###Задача 1.
// Создайте функцию find(inputArray, value), которая ищет в массиве inputArray значение value
// и возвращает его номер, если найдено, или -1, если не найдено.

var inputArray = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6];

var find = function (arr, val) {
    return arr.hasOwnProperty(val) ? arr.indexOf(val) : -1
};

console.log(find(inputArray, 5));
console.log(find(inputArray, -5));
console.log(find(inputArray, 0));


// ###Задача 2.
//     ```var inputArray = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6]; ```
// Отсортируйте массив inputArray, используя алгоритм пузырьковой сортировки.

var inputArray = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4, 10];

function bubbleSort(arr) {
    var i, j;
    for (i = 0; i < arr.length; i++) {
        for (j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(inputArray));

// ###Задача 3.
// Напишите функцию bigToSmall, которая будет принимать один аргумент inputArray (двухмерный массив).
// Ваше задание:
//     1. Привести двухмерный массив к одномерному.
// 2. Отсортировать массив в нисходящем порядке.
// 3. Использовать символ ‘>’ как разделитель при превращении массива в строку.
//
//     Например:
// ```
//   bigToSmall([[1,2],[3,4],[5,6]])  "6>5>4>3>2>1"
//   bigToSmall([[1,3,5],[2,4,6]])  "6>5>4>3>2>1"
//   bigToSmall([[1,1],[1],[1,1]])  "1>1>1>1>1"
//   ```

var bigToSmall = function (arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {           //unwrapping
        for (var j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }

    result.sort(function (a, b) {                   //sorting >
        return b - a;
    });

    return result.join(">");

};

var arr1 = [[1, 2], [3, 4], [5, 6, 7]];
var arr2 = [[1, 3, 5], [2, 4, 6]];
var arr3 = [[1, 1], [1], [1, 1]];

console.log(bigToSmall(arr1));
console.log(bigToSmall(arr2));
console.log(bigToSmall(arr3));
