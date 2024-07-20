import { Login, User } from './interface';
// import * as UserLogin from './interface'
class Employee {
    id!: number;
    name!: string;
    address!: string;
}

let john = new Employee()
john.id = 1;
john.name = "John";
john.address = "Germany"

// console.log(john);
interface Address {
    street: string;
    city: string;
    state: string;
    pin: number;
}
class Student implements Login {
    #id: number;
    protected name: string;
    address: Address;
    get stdId(): number {
        return this.#id;
    }
    set stdId(id: number) {
        this.#id = id
    }
    static getEmployeeCount(): number {
        return 50
    }
    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    Login(): User {
        return {
            name: 'rohan',
            id: 3,
            email: 'rohan@gmail.com',
        }
    }
    getNameWithAddress(): string {
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address} who's id is ${this.#id}`
    }
}


let ram = new Student(1, 'Ram', { street: "abc", state: 'maharashtra', city: 'nagpur', pin: 440002 })
// Student.getEmployeeCount()
ram.stdId = 5;
console.log(ram.stdId);

console.log(ram);
let address = ram.getNameWithAddress()
// console.log(address);

class Manager extends Student {
    protected name!: string;
    constructor(id: number, name: string, address: Address) {
        super(id, name, address)
    }

}
let mike = new Manager(2, 'Tison', { city: 'pune', street: 'higway 3', state: 'maharashtra', pin: 552233 })
console.log(mike);
