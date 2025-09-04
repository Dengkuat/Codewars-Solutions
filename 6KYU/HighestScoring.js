function findMissingLetter(array){
    const charCode = array.map(char => char.charCodeAt());

    return charCode.map((x, i) => {
        if(charCode[i+1] !== x+1){
            return String.fromCharCode(x+1);
        }
    }).filter(Boolean)[0]
    }
console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));

// function charCode(arr){
//     return arr.map(x => x.charCodeAt());
// }
// console.log(charCode(['A','b']));
//?input
//an array of alphabetic letters
//

//*info
//a method that takes in an array of consecutive increasing letter as input
//it shoud return the missing letter in the array
//you shall always get a valid array, and it will be exaclty one letter missing 
//the length of the array shall always be greater than 2
//so the array will always contain letter in only one cases 


//!testCases
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

//
// so since the array in case sentive tho all the cases shall all be one letter thing
//so we create 2 comparison for the upper case and the lower case
//we will be using the ASCII table of position 
// so we will iterate though each letter in the array and for that letter we will check for the missing number
//once we got the number then we return the letter that belongs to that number

//so for a char code is 97 - 96 = 1 position of a
//so for A char code is 65 - 64 = 1 position of A