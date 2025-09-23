
// division by zero
try {
    let a = 10/0;
    console.log(a);
}
catch(e) {
   console.log("Infinity", e.message);   // Infinity
}

// custom Exception
function validate(age) {
    if(age < 18) {
        throw new Error("under Aged");
    } else {
        console.log("Valid Age");
    } 
}
try {
    validate(16);
} 
catch(e) {
    console.log("Error is: ", e.message);     // Error is:  under Aged
}