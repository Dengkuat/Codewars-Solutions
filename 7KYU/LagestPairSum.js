const largestPairSum = numbers => numbers.sort((a, b) => b-a).slice(0, 2).reduce((a, b) => a+b)

  //?input
  //so we have an array of integers

  //*info
  //so we are supposed to find the sum of the largest pair in the sequence

  //!test cases
    // [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
    // [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

    //so l will sort the array in decending order so that the largest number can appear first 
    //then slice from 0 to the 2, reduce them into a sum and add that sum