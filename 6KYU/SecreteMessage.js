function decipherThis(str) {
    //have fun!
    return str.split(' ').map(word => {
        const num = word.match(/^\d+/)[0];
        const first = String.fromCharCode(num);

        let rest = word.slice(num.length);
        if (rest.length >= 2) {
          const firstOne = rest[0];
          const lastOne = rest[rest.length - 1];
          rest = lastOne + rest.slice(1, rest.length - 1) + firstOne;
        }
        return first + rest;
    }).join(' ');
}

//?input
//so our input is a secrete message alright
//its switched up characters

//*info
//so from that secrete message we will need to find the correct way to be read
//For each word:
// the second and the last letter is switched(e.g.Hello becomes Holle)
// the first letter is replaced by its character code(e.g.H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces

//this goes on for all the characters in the sentence

//!test cases
// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'
// it('Sample Tests', function () {
//     doTest('72olle 103doo 100ya', 'Hello good day');
//     doTest('82yade 115te 103o', 'Ready set go');
//     doTest('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o', 'Have a go at this and see how you do');
//     doTest('65 119esi 111dl 111lw 108dvei 105n 97n 111ka', 'A wise old owl lived in an oak');
//     doTest('84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp', 'The more he saw the less he spoke');
//     doTest('84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare', 'The less he spoke the more he heard');
//     doTest('87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri', 'Why can we not all be like that wise old bird');
//     doTest('84kanh 121uo 80roti 102ro 97ll 121ruo 104ple', 'Thank you Piotr for all your help');
// });

//soln
//so since the second letter is switched up with the last one then we shall have to switch them back to make the correct compete text
//then the first letter is a letter, that number is its position is the ASCII table so we shall have to repace that one aswell 
//that all and the rest of the character are good to go 
//so for the ASCII table l could 
//l shall first step change them into an array though spliting them so l could use map to create the transformation on each of the text or words in the sentence