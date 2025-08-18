function uniqueOrder(iterable){
    if(typeof iterable === 'string') iterable =  iterable.split('')
    return iterable.filter((x, i) => x !== iterable[i-1]);
}

//??input
//an input can be anything ranging from a list of elements, array of intgers, string of alphabetic characters
//they contain reetitve characters one after the other 

//*info
//return an array of items where the ones that are next to each other should not be repeated
//we preserving the orginal order of the array

//!test cases
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//split them into array of chaacters if at all the input is an string and not an array
//if the previous number is not equal to the next number then we will be collected them in a sepate sections that we will return later on
//using map since we will be returning a new array of the ones that are not similar and close to each other 