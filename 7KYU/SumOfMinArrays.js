function sumOfMinimums(arr) {
    // your code here
    return arr  .map(arr => Math.min(...arr))
                .reduce((acc, curr) => acc+curr, 0);

  }

  //?input
  //a 2d nested list of arrays
  //array contains positive integers

  //*output
  //find the smallest intgers in each array
  //then sum them up to find the smallest sum of all minimal integers
  //the array will never emtpty 

  //!testcases
//   [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//     , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//     , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
//     ]
            //so then sum = 1 + 5 + 20 = 26.

  //
  //iterate though each array in the array of array 
  //using built in maths - Math.min() on each array usind the spread operato to separate the array of integers into individual intgeres
  //using reduce to return a single value of sum 