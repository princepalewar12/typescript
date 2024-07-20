"use strict";
let fname;
fname = 'prince';
let age;
age = 5;
// console.log(age);
let dob = '225';
let res = parseInt(dob);
let isValid = false;
// console.log(isValid);
// Arrays
let empList;
empList = ['name', 'email', 'password'];
let stdList;
stdList = [1, 2, 3, 4, 5];
let abc = stdList[5];
console.log(abc);
let res1 = stdList.filter((num) => num > 2);
// console.log(res1);
let value = empList.find((str) => str === "name");
// console.log(value);
let add = stdList.reduce((acc, num) => acc + num);
let c = 0 /* Color.Red */;
// Tuples   
let swapNum;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNum = swapNumbers(5, 4);
// console.log(swapNum[2]);
