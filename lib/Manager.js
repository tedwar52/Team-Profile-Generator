// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);

        this.officeNumber = officeNumber;
    }

    getRole() {

    }
}

const mang = new Manager("taylor", 4, "tedwar52", 301)
mang.printInfo();

module.exports = Manager;