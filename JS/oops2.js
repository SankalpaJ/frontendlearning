class Employee {
    constructor(name, id, sal) {
        this.name = name;
        this.id = id;
        this.sal = sal;
    }
    displayDetails() {
        console.log(`Name: ${this.name}, id: ${this.id}, sal: ${this.sal}`);
    }
    skillsInfo() {
        console.log(`${this.name}'s Skills: ${this.skills.join(", ")}`);
    }
}

class Developer extends Employee {
    constructor(name, id, sal, skills) {
        super(name, id, sal);
        this.skills = skills;
    }
    skillsInfo() {
        console.log(`${this.name}'s Developer Skills: ${this.skills.join(", ")}`);
    }
    project(pro_Name) {
        console.log(`${this.name} is working on project ${this.pro_name}`);
    }
}

class Tester extends Employee {
    constructor(name, id, sal, tools) {
        super(name, id, sal);
        this.tools = tools;
    }
    skillsInfo() {
        console.log(`${this.name} tester Skills: ${this.tools.join(", ")}`);
    }
    project(pro_Name) {
        console.log(`${this.name} is testing project: ${pro_Name}`);
    }
    }

const dev = new Developer("Alice", 101, 54000, ["HTML", "CSS", "JS"]);
console.log(dev);
dev.displayDetails();    // Name: Alice, id: 101, sal: 54000
dev.skillsInfo();       //  Alice's Developer Skills: HTML, CSS, JS
dev.project("E-commerce website");         //   Alice is working on project