let a =parseInt(prompt("Input value a",""));
let b = parseInt(prompt("Input value b",""));
let c = parseInt(prompt("Input value c",""));

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === null && "undefined" ||
    b === null && "undefined" || c === null && "undefined") {
        alert("input values should be ONLY numbers");
    } else {
    if (a <= 0 || b <= 0 || c <= 0) {
    alert("A triangle must have 3 sides with a positive definite length")
        } else if (a + b > c && b + c > a && c + a > b) {
            if (a === b && b === c && c === a) {
            console.log("Equilateral triangle")
            } else if (a === b || b === c || c === a) {
            console.log("Isosceles triangle")
            } else if (a !== b && b !== c && c !== a) {
            console.log("Scalene triangle")
            }
        } else {
        alert("Triangle doesn't exist")
        }
    }