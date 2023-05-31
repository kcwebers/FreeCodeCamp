/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator

Concatenating Strings with the Plus Equals Operator
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStr now has a value of the string I come first. I come second..

Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.
=================================================================*/

// Original
// let myStr;

// Solution
let myStr = "This is the first sentence.";
myStr += " ";
myStr += "This is the second sentence.";
console.log(myStr)