function getLengthOfMissingArray(arrayOfArrays) {
    
  }
  console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
  
  //?input
  //nested arrays

  //*info
  //if u sort the array by length u shall find the missing array 
  //write a function that retuns the lenth of the missing array
  //if the array is null or empty the we return is 0
  //there is always going to be a missing element between the given arrays

  //!test cases
//   Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

//sort the array from ascending order
// (lengths[i + 1] !== lengths[i] + 1) 