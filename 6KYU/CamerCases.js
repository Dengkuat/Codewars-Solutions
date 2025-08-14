function toCamelCase(str) {
    return str.split(/[-_]/).map((x, i) => i === 0 ? x: x[0].toUpperCase() + x.slice(1)).join('');
}
//?input
//string of character includes dash and underscore
//

//*info
//convert the words into camel cases
//the first word eithin the output should be captialized onlny if the original word was captalized
// the next word should be always captalized

//!test cases
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


//remove the underscore and dash
//then the next word should be captalized 
//then join then character after
