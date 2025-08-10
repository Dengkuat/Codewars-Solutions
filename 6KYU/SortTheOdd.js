function sortArray(array) {
    // Return a sorted array.
    let index =0;
    const odd = array.filter(o => o%2!==0).sort((a, b)=>a-b);
    return array.map(x => x%2===0? x:odd[index++]);
  }

  //?input
  //array of integers
  //containing both even and odd numbers

  //*info
  //sort the odd numbers in ascending order while leaving the even numbers untouched in their original position


  //!test cases
//   [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//filter out the odd numbers from the array
//return a new array of sorted numbers in ascending order
//leaving the even numbers, replace the odd numbers with the new sorted array