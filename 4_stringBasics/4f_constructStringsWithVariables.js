/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/constructing-strings-with-variables

Constructing Strings with Variables
Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

Example:

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
ourStr would have a value of the string Hello, our name is freeCodeCamp, how are you?.

Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!
=================================================================*/

// Original
// // Only change code below this line
// const myName = "";
// const myStr = "";

// Solution
// Only change code below this line
const myName = "Kaysee";
const myStr = "My name is " + myName + " and I am well!";
console.log(myStr)