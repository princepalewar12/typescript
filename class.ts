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

class Student {
    #id: number;
    protected name: string;
    address: string;
    get stdId(): number {
        return this.#id;
    }
    set stdId(id: number) {
        this.#id = id
    }
    static getEmployeeCount(): number {
        return 50
    }
    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress(): string {
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address} who's id is ${this.#id}`
    }
}


let ram = new Student(1, 'Ram', 'Ayodhya')
// Student.getEmployeeCount()
ram.stdId = 5;
console.log(ram.stdId);

console.log(ram);
let address = ram.getNameWithAddress()
// console.log(address);

class Manager extends Student {
    protected name!: string;
    constructor(id: number, name: string, address: string) {
        super(id, name, address)
    }

}
let mike = new Manager(2, 'Tison', 'Tokyo')
// console.log(mike.getNameWithAddress());
