function high(x){
    const words = x.split(' ');
 
    const final = words.map(z => {
       const subArray = [...z].map(w => w.charCodeAt(0) - 96);
       const sum = subArray.reduce((a, b) => a + b, 0);
       return sum;
    });
 
    const Maximum = Math.max(...final);
    const char = final.indexOf(Maximum);
    return words[char]; 
 }
 

//?input
//string of words 
//lower case everything

//*info
//finding the highest scoring word
//each letter of a word points according to its position in the alphabet a = 1, b = 2, c = 3;
//

//!test cases
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
// assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
// assert.strictEqual(high('take me to semynak'), 'semynak');   
// assert.strictEqual(high('aa b'), 'aa');

//
// ascii table - 
