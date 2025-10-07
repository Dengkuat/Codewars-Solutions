const checkString = (string) => {
    if (string.length < 6) return false;

    if (!/[A-Z]/.test(string)) return false;

    if (!/[a-z]/.test(string)) return false;

    if (string.includes('_')) return false;

    if (!/\d/.test(string)) return false;

    if(/[^a-zA-Z0-9]/.test(string)) return false;

    return true;
};

const REGEXP = {
    test: checkString
};



//?input
//a string 
//the string contains a variaty of characters
//we could say that the characters are alphabetic some are unalphabetic character aswell as punctuations and numbers

//*info
//so writing a function that will return a boolean expression of either true of false if at all the input string passes all the restrictions
//so the creterias are;
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

//!test cases
// doTest('fjd3IR9', true);
// doTest('ghdfj32', false);
// doTest('DSJKHD23', false);
// doTest('dsF43', false);
// doTest('4fdg5Fj3', true);
// doTest('DHSJdhjsU', false);
// doTest('fjd3IR9.;', false);
// doTest('fjd3  IR9', false);
// doTest('djI38D55', true);
// doTest('djI3_8D55', false);
// doTest('djI38D55@@', false);


//sol
//so for the input to show true then atleast one character has to be uppercase and lower case aswell so the string should contains atleast 1 of either cases
//then it should atleast conain a number to show true
//it cannot have _ or - because thoes are no alphabetic 
//lastly its length should be not less than 6

//so l could use lots of edge cases cenarials
//like if this then show its past the step


//so the soution passes the test correct
//tho the starter codes codes it meant to only have a regex expression 
//so l shall have to improvise it to that
