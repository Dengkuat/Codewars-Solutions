const flatten = (...args) =>  args.flat(Infinity);

//?input
//an array of arrays 
//the input array could 

//*info
//so we are supposed to create a flatten method 
//so the method takes in any number of arguments and flattens then into a single array of numbers
//so if the array is an individual object within the array then we will flatten so they exist in the same levek aswell
//so any nested array no matter how deep it is then should be flattened into a single array as a result

//!test cases
// flatten(1, [2, 3], 4, 5, [6, [7]]) ==> [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, 666, [[4], ['c']]) ==> ['a', 'b', 2, 3, 666, 4, 'c']

//steps 
//so l could use the flat(infinity) array method  to completly flatten the nested arrays into a single array
