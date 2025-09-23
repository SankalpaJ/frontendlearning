class Employee {
    constructor(emp_name, emp_id, emp_sal) {
        this.emp_name = emp_name;
        this.emp_id = emp_id;
        this.emp_sal = emp_sal;
    }
    details() {
        console.log(`Name: ${this.name}, id: ${this.id}, Salary: ${this.emp_sal}`);
    }
}  /* 
const e1 = new Employee("Arjun", 123, 35000);
console.log(e1);              // Employee { emp_name: 'Arjun', emp_id: 123, emp_sal: 35000 }
console.log(e1.details());   // Employee is working
*/
class Developer extends Employee {
    constructor(emp_name,emp_id,emp_sal,designation) {
        super(emp_name,emp_id,emp_sal);
        this.designation = designation;
    }
    details() {
       console.log(this.designation+ " is workking.."); 
    }
    skills() {
        console.log(this.designation+ " knows html, css, & java");
    }
}
const e1 = new Developer("Aryaa kumar", 23, 23000, "Developer");
console.log(e1);
e1.details();         // Developer is workking..
e1.skills();         // Developer knows html, css, & java

class TestEngineer extends Developer {
     constructor(emp_name,emp_id,emp_sal,designation) {
        super(emp_name,emp_id,emp_sal,designation);
     }
     details() {
        console.log(this.designation+ " is testing...");
     }
     skills() {
        console.log(this.designation+ " knows selenium, python, java, testNg");
     }
     project() {
        console.log(this.emp_name+ " is doing project since from morning..");
     }
}
const t1 = new TestEngineer("Manvi", 1234, 450000, "Test Engineer");
console.log(t1);
t1.details();
t1.skills();
t1.project();
/* Developer {
  emp_name: 'Aryaa kumar',
  emp_id: 23,
  emp_sal: 23000,
  designation: 'Developer'
}
Developer is workking..
Developer knows html, css, & java
TestEngineer {
  emp_name: 'Manvi',
  emp_id: 1234,
  emp_sal: 450000,
  designation: 'Test Engineer'
}
Test Engineer is testing...
Test Engineer knows selenium, python, java, testNg
Manvi is doing project since from morning..  
*/
