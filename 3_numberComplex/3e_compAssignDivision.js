/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-division

Compound Assignment With Augmented Multiplication
The *= operator multiplies a variable by a number.

myVar = myVar * 5;
will multiply myVar by 5. This can be rewritten as:

myVar *= 5;
Convert the assignments for a, b, and c to use the *= operator.
=================================================================*/

// Original
// let a = 48;
// let b = 108;
// let c = 33;
// // Only change code below this line
// a = a / 12;
// b = b / 4;
// c = c / 11;

// Solution
let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
console.log(a)
console.log(b)
console.log(c)