// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);

        this.github = github;
    }
    getGitHub() {

    }

    getRole() {

    }
}

const worker1 = new Engineer("taylor", 2, "tedwar52", 301)
worker1.printInfo()

module.exports = Engineer;