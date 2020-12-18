// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the ID.");
        }
        if (!email) {
            throw new Error("You are missing the email.")
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        for (const key in this) {
            console.log(`${key}: ${this[key]}`)
        }
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

    }
}

const worker = new Employee("taylor", 1, "tedwar52");
worker.printInfo();

module.exports = Employee;