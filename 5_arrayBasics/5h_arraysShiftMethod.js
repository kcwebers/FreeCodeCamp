/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift

Manipulate Arrays With shift Method
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
=================================================================*/

// Original w/Solution
// Setup
const myArray = [["John", 23], ["dog", 3]];
console.log(myArray)

// Only change code below this line
let removedFromMyArray = myArray.shift()
console.log(removedFromMyArray) // see how the shift() method pulls a single value
console.log(myArray) // check to see how the array was modified!