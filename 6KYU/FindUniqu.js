function findUniq(arr) {
    // do magic
    const sortedArray = arr.sort((a, b) => a-b);
    return sortedArray[0] !== sortedArray[1]? sortedArray[0]:sortedArray[sortedArray.length - 1];
}
  //?input
  //an array of integers
  //all numbers are equal except from one


  //*info
  //the array can contain atleast 3 integers
  //test contains very huge numbers so think about performance

  //!test cases

//   findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

//
//sort the array in ascending order
//if the first index is not equal to the second index then return the last index 