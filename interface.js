"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object destructuring
let { name: userName, email: userLogin } = {
    name: 'rohan',
    id: 3,
    email: 'rohan@gmail.com',
};
let employee = { name: 'yash', id: 5, email: 'yash@gmail.com', age: 27, salary: 8000 };
let [user1, user2, ...restUsers] = [{
        name: 'rohan',
        id: 1,
        email: 'rohan@gmail.com',
    }, {
        name: 'ram',
        id: 2,
        email: 'raman@gmail.com',
    }, {
        name: 'yash',
        id: 3,
        email: 'yash@gmail.com',
    }, {
        name: 'goyal',
        id: 4,
        email: 'goyal@gmail.com',
    }, {
        name: 'kishan',
        id: 5,
        email: 'kishan@gmail.com',
    }];
// console.log(user2);
// console.log(user1);
// console.log(restUsers);
let result = restUsers.filter((user) => user.id > 2);
console.log(result);
