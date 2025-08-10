function findAverage(nums) {
    // Code here
    return nums.reduce((acc, curr) => (acc+curr), 0)/nums.length;
  }

  //?input
  //array of integers
  //integers are positive

  //*info
  //average of all the integers in the array
  //return value is intgers average

  //!test cases
    //   [1, 3, 5, 7] - 4

    //steps
    //array so- use reduce - a call back function that return a single digits of a result of the input array 
    //divided by the length of the array to find their average
