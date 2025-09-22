const SumSquares = l => {
    return l.flat(Infinity).reduce((acc, curr) => acc + curr*curr, 0);
}


//?input
//array of integers
//it can be a nested array aswell

//*info
//a function to sum up square of numbes in list that may contain more list like nested array
//note we cannot modify the original array list 
//it cannot be mutated


//!test cases
/*
var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
*/

//sol
//so we cannot change the order right
//aight so we see nested array avoiding thoes we can use the flat() array method to turn then into a single array
//then with reduce method we could sum up all the numbers squared and return that solution