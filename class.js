"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Student_id;
Object.defineProperty(exports, "__esModule", { value: true });
// import * as UserLogin from './interface'
class Employee {
}
let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "Germany";
class Student {
    get stdId() {
        return __classPrivateFieldGet(this, _Student_id, "f");
    }
    set stdId(id) {
        __classPrivateFieldSet(this, _Student_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Student_id.set(this, void 0);
        __classPrivateFieldSet(this, _Student_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Login() {
        return {
            name: 'rohan',
            id: 3,
            email: 'rohan@gmail.com',
        };
    }
    getNameWithAddress() {
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address} who's id is ${__classPrivateFieldGet(this, _Student_id, "f")}`;
    }
}
_Student_id = new WeakMap();
let ram = new Student(1, 'Ram', { street: "abc", state: 'maharashtra', city: 'nagpur', pin: 440002 });
// Student.getEmployeeCount()
ram.stdId = 5;
console.log(ram.stdId);
console.log(ram);
let address = ram.getNameWithAddress();
// console.log(address);
class Manager extends Student {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let mike = new Manager(2, 'Tison', { city: 'pune', street: 'higway 3', state: 'maharashtra', pin: 552233 });
console.log(mike);
