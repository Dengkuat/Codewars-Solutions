function findOdd(A) {
    //happy coding!
    return A.reduce((acc, curr)=> acc^curr);
  }
  

  //?input
  //given an array of integers
  //find the one that appears an odd number of times
 
  //*output
  //the array will only have one number that appears an odd number of times and that is the one we will be looking for

  //!test cases
//   [7] should return 7, because it occurs 1 time (which is odd).
//     [0] should return 0, because it occurs 1 time (which is odd).
//     [1,1,2] should return 2, because it occurs 1 time (which is odd).
//     [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//     [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).



  //
  //“I used the bitwise XOR operator because it helps me find the number 
  // that appears an odd number of times by canceling out all numbers that appear 
  // an even number of times. When you XOR two identical numbers, the result is zero,
  //  so pairs disappear. XORing with zero keeps the number unchanged. 
  // So, by XORing all numbers together, all even pairs cancel out,
  //  leaving only the odd one.”