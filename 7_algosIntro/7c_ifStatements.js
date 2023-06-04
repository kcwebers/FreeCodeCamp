/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements

Use Conditional Logic with If Statements
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
=================================================================*/

// Original w/Solution

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){ // explain how this line actually reads
        return "Yes, that was true";
    } else {
        return "No, that was false";
    }
    // Only change code above this line
}

console.log(trueOrFalse(true))
console.log(trueOrFalse(false))

// =================================================================
// Personal Notes
// =================================================================
/*

- there are several ways to write this assignment
- recommend trying to write the solution for this in several ways! Encourages students to think about things in several ways
- add console.logs in all function works so students can SEE what they are doing

*/
