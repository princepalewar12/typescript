"use strict";
// function with optional parameter
function addNum(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// console.log(addNum(3, 4, 6));
//function with default/required parameter 
let sub = (num1, num2, num3 = 15) => num1 - num2 * num3;
// console.log(sub(2, 4));
// console.log(sub(5, 4, 2));
let multiply = function (num1, num2, num3) {
    return num1 * num2 * num3;
};
let numbers = function (num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
};
let integers = [5, 3, 2, 2];
console.log(numbers(1, 2, ...integers));
console.log(numbers(1, 2, 3, 4, 5));
// Generic function
function getItems(items) {
    return new Array().concat(items);
}
let concatRes = getItems([1, 2, 3, 4, 5]);
let concatRes1 = getItems(['e', 'd', 'c', 'b', 'a']);
