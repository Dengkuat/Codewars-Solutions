function moveZeros(arr) {
    const nonZero = arr.filter(x => x !== 0);
    const zeros = arr.filter(y => y === 0);
    return [...nonZero, ...zeros];
  }

  //?input
  //an array of objects
  //thoes objects can be a boolean, number, string

  //*info
  //an algorithm that takes an array and moves all the zeros to the end 
  //we preserving the order of the array

  //!test cases
//   moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//
// l could use filter array method
//so we could filter out all zeros leaving the array untoched and aswell filter out the arr aagain where there are no any zeros
//return a new array but addign the filtered array of zeros to the end of the original arrayQ