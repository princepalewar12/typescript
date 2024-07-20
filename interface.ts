export interface User {
    name: string;
    id: number;
    email: string;
    age?: number;//made the age optional
}

//object destructuring
let { name: userName, email: userLogin }: User = {
    name: 'rohan',
    id: 3,
    email: 'rohan@gmail.com',
}

interface Employees extends User {
    salary: number
}

let employee: Employees = { name: 'yash', id: 5, email: 'yash@gmail.com', age: 27, salary: 8000 }
// console.log(employee);

export interface Login {
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [{
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
}]

// console.log(user2);
// console.log(user1);
// console.log(restUsers);

let result = restUsers.filter((user) => user.id > 2)
console.log(result);
