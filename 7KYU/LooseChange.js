// Remember you have a CHANGE dictionary to work with ;)
const CHANGE = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.10,
    quarter: 0.25,
    dollar: 1.00
   }
function changeCount( change ) {
    return `$${change
    .split(' ')
    .map(word => CHANGE[word])
    .reduce((x, y) => x+y, 0)
    .toFixed(2)}`
}


//?input
//a string of alphabetic characters

//*info
//so we write a function to return a dollar amount of how much change you have
// so there are valid inputs
//returning the total in in the foramt of dollrm 
//so we returing a string with the sum of the input then adding the dollar sigh before the digits 

//!test cases
// penny: 0.01
// nickel: 0.05
// dime: 0.10
// quarter: 0.25
// dollar: 1.00

// Examples
// "nickel penny dime dollar" --> "$1.16"
// "dollar dollar quarter dime dime" --> "$2.45"
// "penny" --> "$0.01"
// "dime" --> "$0.10"


//note this amounts are already preloaded as floats into the change obeject to be be used


//declearnig our valid types of changes so we replace it with the string
//once they are replaced then we sum up all the digits and return it in a dollar bill form
//so after replacing them with the place holder are digits then we convert the string into array of numbers 
//sum the digits and return it
