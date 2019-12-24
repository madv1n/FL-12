let a = parseInt(prompt("Input value a",""));
let b = parseInt(prompt("Input value b",""));
let c = parseInt(prompt("Input value c",""));

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0) {
    console.log("Invalid input data")
}

let discr = Math.pow(b,2) - 4 * a * c;
let x1 = (-b + Math.sqrt(discr))/(2*a);
let x2 = (-b - Math.sqrt(discr))/(2*a);

    if (discr > 0) {
        console.log("x1=" + Math.round(x1));
        console.log("x2=" + Math.round(x2));
    } else if (x1 === 0) {
        console.log("x1=0");
    } else if (x2 === 0) {
        console.log("x2=0");
    } else if (discr < 0) {
        console.log("no solution")
    }