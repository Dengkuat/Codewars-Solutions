function EvenOdd(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i += 2) {
      result = result * arr[i] + (arr[i + 1] !== undefined ? arr[i + 1] : 0);
    }
    return result;
  }


//?input
//a function that takes in an array of numbers
//numbers consits of positive integers

//*info
//return a single number
//using the pattern in the test cases to figure out what is going on

//!test cases
// (1, 2, 6, 1, 6, 3, 1, 9, 6) => 393
// (1, 2, 3)                   =>   5
// (0, 2, 3)                   =>   3
// (1, 0, 3)                   =>   3
// (3, 2)                      =>   6

//
//so we seeing the pattern go in a way like like the first number x second number + third number
//it keeps going like that
