/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript

Finding a Remainder in JavaScript
The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2. Even numbers have a remainder of 0, while odd numbers a remainder of 1.

17 % 2 = 1
48 % 2 = 0
Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
=================================================================*/

// Original
// const remainder = 0;

// Solution
const remainder = 11 % 3;
console.log(remainder)