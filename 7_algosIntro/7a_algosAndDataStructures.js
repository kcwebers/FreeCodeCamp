/*=================================================================
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line

Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
=================================================================*/

// Original w/Solution
function nextInLine(arr, item) {
    // Only change code below this line
    // add number to the end of array
    arr.push(item);

    // remove first element of the array
    // store it in a variabel that can then be returned
    let removed = arr.shift();

    return removed;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// =================================================================
// Personal Notes
// =================================================================
/*
- Highlights the term Data Structure, which is something that I think should be defined earlier
- Why not introduce what a data structure is with the arrays section?
- Can juxtapose data structures with data types and explain their differences

- Again, solution contains excess that isn't properly defined (JSON.stringify(testArr))
- Okay to contain items that aren't properly defined, but encourage the used to seek out definition and suggest areas to look

- this lesson in general takes a pretty big leap in terms of complexity and concept development. Maybe breakdown a bit more.
*/
// =================================================================
// =================================================================