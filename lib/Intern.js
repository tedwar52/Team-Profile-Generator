// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.school = school;
    }

    getSchool() {

    }

    getRole() {

    }
}

const intern = new Intern("taylor", 3, "tedwar52", "unca")
intern.printInfo()

module.exports = Intern;