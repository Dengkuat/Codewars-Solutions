function flatten(array){
    return array.flat();
}
console.log (flatten([[1,2,3],["a","b","c"],[1,2,3]]));

//?input
//nested arrays that can include anything from number to letters 

//*info
//a function that flatten a nested array into a flatten array 
//must do a one level flattening 

//!test cases
// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

//here we can use the array method array.flat();