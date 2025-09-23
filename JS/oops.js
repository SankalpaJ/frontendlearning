/* 2 ways to create class 
       1) { } 
       2) "class" 
       3) "new"  ==>  to create object

class as * properties = emp_id, emp_name
         * behaviour = work(), meeting()
 */
// 1) { }
const employee = {
    emp_id: 123,
    emp_name: "Thanvii",
    emp_sal: 35000,

    work: function() {
        console.log(employee.emp_name+ " Employee is working..");
    },
    meeting: function() {
         console.log("Employee attends meeting at 9'0am.");
    }
};
console.log(employee);            // { emp_id: 123, emp_name: 'Thanvii', emp_sal: 35000 }
console.log(employee.emp_sal);   // 35000
console.log(employee.emp_id);   // 123
console.log(employee.work());  // Thanvii Employee is working..
console.log(employee.meeting());  // Employee attends meeting at 9'0am.

// 2) class keyword
class Employee {
    name = "Manvi Shetty";
    id;
    salary = 25000;

    work() {
        console.log("Emp works..");
    }
    meeting() {
        console.log("Emp attends meeting.");
    }
}
const e = new Employee();   // object creation
console.log(e.name);       // Manvi Shetty
e.id = 101;
console.log(e.id);        // 101
console.log(e.salary);   // 25000
e.work();               // Emp works..
e.meeting();           // Emp attends meeting.

// using constructor & creating 2 emp...
// by default 0-parameter constructor will be created when we did't create constructor...
class Student {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    work() {
        console.log(this.name + "Student is working.");
    }
}
const s = new Student("Arjun", 18, 98765483);
console.log(s);                // Student { name: 'Arjun', age: 18, phone: 98765483 }

const s1 = new Student("Ramu Gowda", 20, 98756432);
console.log(s1);            // Student { name: 'Ramu Gowda', age: 20, phone: 98756432 }

