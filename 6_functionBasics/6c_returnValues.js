/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return

Return a Value from a Function with Return
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
=================================================================*/

// Solution (no Original)
// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5))

// =================================================================
// Personal Notes
// =================================================================
/*
- Added console.log()

- Talk more clearly about the difference between console.log vs. return
- Make it clear that a return statement contains a value, vs a console.log that is a translation for the user to see
- This is why using console.log more often up until this point would be important!!
*/
// =================================================================
// =================================================================