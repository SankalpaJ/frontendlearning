// (...) spread opr
function add(...args) {
    let sum = 0;
    for(let num of args) {
        sum += num;    // sum = sum + num
    }
    console.log(sum);
}
add();             // 0
add(10, 20);       // 30
add(20, 30, 40);   // 90
add(2, 3, 4, 5);   // 14