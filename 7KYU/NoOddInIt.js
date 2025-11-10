const noOdds = values => values.filter(num => num % 2 === 0)

//?input
//an array of numbers

//*info
//so we have to return the values of an array that are no odd
//All the guven array will be integers only, return the good values in the order they are given

//!test case
// assert.deepEqual( noOdds( [0,1] ), [0] )
//     assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )