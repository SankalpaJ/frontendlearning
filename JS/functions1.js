// No input & No return
function add() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
add();

// with input & No return
function sub(x, y) {
    let c = x - y;
    console.log(c);
}
sub(5, 3);

// with input & with return
function mul(a, b){
    return a * b;
}
let product = mul(3, 4);
console.log(product);

let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);