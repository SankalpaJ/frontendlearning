// dataTypes:  1) Primitive   2) Complex
// 1) Primitive
let a = 10;
console.log(a);   // 10
console.log(typeof a);   // number

let b;
b = 1.0956;
console.log(b);
console.log(typeof b);   // number

let c = "Dishaaa";
console.log(c)
console.log(typeof c);

let c1 = "Dishaaa";
console.log(c1)
console.log(typeof c1);

let c2 = "Dishaaa";
console.log(c2)       // "Dishaaa"
console.log(typeof c2);   // string

let isValid = true;
console.log(isValid);
console.log(typeof isValid);  // boolean

var d;
console.log(d);   // undefined

// Complex
let greet = function() {
    console.log("Hello.......");  //  Hello.......
    console.log(typeof greet);      // function
}
greet();

// array
let arr = [1, 2, "Sankuuu"];
console.log(arr);   // [ 1, 2, 'Sankuuu' ]
console.log(arr[0]);  // 1
console.log(typeof arr);  // object

// object
let obj = {
    name: "Srhust",
    age: 18,
    phno: 98653
};
console.log(obj);   // { name: 'Srhust', age: 18, phno: 98653 }
console.log(Object.keys(obj));   // [ 'name', 'age', 'phno' ]