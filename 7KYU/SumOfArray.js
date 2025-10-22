const repeats = arr =>  arr.sort((a, b) => a - b).filter((num, index) => num !== arr[index - 1] && num !== arr[index + 1]).reduce((a, b) => a+b);

//?input
//so we are given an array of numbers as out input
//each number occurs twice apart from 2 numbers only

//*info
//so we have to return the sum of numbers that occur only once
//so return the sum of the number that occur twice

//!test cases
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once,
// and their sum is 15. Every other number occurs twice.

//soln
//i will sort the array in ascending order so that the repeating ones are togehter
//then filter the ones where the previous or and the next one are the same
//using reduce to sum them up