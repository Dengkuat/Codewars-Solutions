
const binaryArrayToNumber = arr => {
    // your code
    return arr.reduce((acc, curr, index) => acc + curr * 2 ** (arr.length - index - 1),0)
};

//?input
//an array of 1's and 0's

//*info
//convert the binary form to a whole number
//however the array can have a variety of number length not just 4

//!test cases
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

//
//from binary to decimal - * 2 ** the place value
//iterate through input string for each - n * 2 ** [n.length - index - 1] - to get its place value
//return the sum;