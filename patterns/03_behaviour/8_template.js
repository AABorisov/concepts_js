class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} is ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has salary ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'developing'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'testing'
    }
}

const dev = new Developer('Andrey', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Elena', 90000)
console.log(tester.getPaid())
console.log(tester.work())
