function sepStr(str) {
    let words = str.split(" ");
    let maxLength = Math.max(...words.map(word => word.length));
    let result = [];
    for (let i = 0; i < maxLength; i++) {
        let row = [];   
        for (let word of words) {
            row.push(word[i] || '');
        }
        result.push(row);
    }
    
    return result;
}
//?input
//a string of characters
//cases senstive

//*info
//the function has to separate the string into a equance of letters
// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// coming from the string sepStr("Just Live Life Man")
//the function should separate each word into individal letters 
//within the first word in the sentence having its letter in the nth index of each 
//as a dimentional array and so on
//for shorter words then an empty string should replace the empty space

//!test cases
// sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);

// sepStr("The Mitochondria is the powerhouse of the cell")
// => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// => [ '', 'o', '', '', 'e', '', '', 'l' ],
// => [ '', 'c', '', '', 'r', '', '', '' ],
// => [ '', 'h', '', '', 'h', '', '', '' ],
// => [ '', 'o', '', '', 'o', '', '', '' ],
// => [ '', 'n', '', '', 'u', '', '', '' ],
// => [ '', 'd', '', '', 's', '', '', '' ],
// => [ '', 'r', '', '', 'e', '', '', '' ],
// => [ '', 'i', '', '', '', '', '', '' ],
// => [ '', 'a', '', '', '', '', '', '' ]]

//steps to solve the problem
//spliting the sentence into an array of individual word
//finding the word with maximum letter
//iterating over each character at the index
//for each raw over each word
//the we push the final result into a dimentioanl array
