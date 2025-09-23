// Global scope
var a = 10;

function outer() {
    console.log("Outer function..");
    // local scope
    var b = 20;

    function inner() {
        console.log("Inner function.....");
    // block scope
    let c = 30;
    console.log(a);   // 10
    console.log(b);   // 20
    console.log(c);   // 30
}
inner();
console.log(a);  // 10
console.log(b);  // 20
//  console.log(c);  //  error
}

console.log(a);   // 10
console.log(b);   // error
console.log(c);   // erorr
outer();