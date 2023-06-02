/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop

Manipulate Arrays With pop Method
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].

Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
=================================================================*/

// Original w/Solution
// Setup
const myArray = [["John", 23], ["cat", 2]];
console.log(myArray)

// Only change code below this line
let removedFromMyArray = myArray.pop()
console.log(removedFromMyArray) // see how the pop() method pulls a single value
console.log(myArray) // check to see how the array was modified!
