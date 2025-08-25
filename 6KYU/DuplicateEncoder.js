function duplicateEncode(word) {

    word = word.toLowerCase();
  
    const freq = {};
    for (let char of word) {
      freq[char] = (freq[char] || 0) + 1;
    }
  
    let result = "";
    for (let char of word) {
      result += freq[char] === 1 ? "(" : ")";
    }
  
    return result;
  }
console.log(duplicateEncode("recede"));

//?input
// a string of characters
//this characters can be repeatitve at times

//*info
//so we will replace each character with a string (
//so if the character repeats itself more than once then we will replace it with ) instead of (
//so here we are case innsentive so meaning a === A

//!test cases
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//
// so l was thinking to change everything into lower case first so they are all matching 
//iteate though each then if the character already exists 