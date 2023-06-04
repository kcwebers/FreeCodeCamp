/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions

Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
=================================================================*/

// Original w/ Solution
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    let outerWear = "sweater";
    // Only change code above this line
    return outerWear;
}

console.log(myOutfit());

// =================================================================
// Personal Notes
// =================================================================
/*
- simply calling the function will not help a inexperienced user because there's nothing visual, update to console.log

- explain more about how the overriding of a global-scope variable works. Also explain how you can "override" a constant variable (basically you are re-declaring the label or "outerWear" to be defined anew within the scope of the local function)
*/
// =================================================================
// =================================================================