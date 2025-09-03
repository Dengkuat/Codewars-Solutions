"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
    const flatArray = array.flat(); 
    flatArray.sort((a, b) => a - b);
    return flatArray
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

//?input
//we havean input of dimentions of integers


//*info
//we returing the the flatterned version of the array with all the integers  in sorted in ascending order
//Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

//!test cases
// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//mind
//sort the array first through the ascening order since they are already arranged good
//then convert them into an single array how can l do this?
//convert all of them into a string then concat everything and then return them as a string