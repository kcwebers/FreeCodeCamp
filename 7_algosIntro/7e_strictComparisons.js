/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator

Comparison with the Strict Equality Operator
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
=================================================================*/

// Original w/Solution

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
console.log(testStrict(10))


// =================================================================
// Personal Notes
// =================================================================
/*

- following assignment includes explanation of strict comparison, would be beneficial to introduce these 2 concepts together
- explain better WHY strict vs non-strict comparisons works

-  progress to introducing comparisons and falsey value sin JS (make sure you explain why this is a js specific thing sometimes)

*/
