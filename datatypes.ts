let fname: string;
fname = 'prince';

let age: number;
age = 5;
// console.log(age);
let dob = '225'

let res = parseInt(dob)

let isValid: boolean = false;
// console.log(isValid);

// Arrays

let empList: string[];
empList = ['name', 'email', 'password']
let stdList: Array<number>;
stdList = [1, 2, 3, 4, 5]
let abc = stdList[5]
// console.log(abc);

let res1 = stdList.filter((num) => num > 2)
// console.log(res1);

let value = empList.find((str) => str === "name")
// console.log(value);


let add = stdList.reduce((acc, num) => acc + num);
// console.log(add);

// enum
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Red;

// Tuples   
let swapNum: [firstnumber: number, secondnumber: number];
function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}
swapNum = swapNumbers(5, 4);
// console.log(swapNum[2]);
