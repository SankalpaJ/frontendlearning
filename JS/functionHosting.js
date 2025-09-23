// "var" are hosited on top
var a;
console.log(a);   // undefined
a = 10;
console.log(a);   // 10

// let & const ===> not hoisted  bcz they are placed in TDZ
console.log(b);  // undefined
 let b;          // Error
b = 20;
console.log("B is: ", b);   // B is: 20

// const can't only be declared it also be initilize before run....
// console.log(c);  // Error
// const c;
const c = 30;
console.log(c);   // 30