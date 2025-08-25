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
// Convert word to lowercase
//creating an empty dictionarythat will store each character 
//for each character in the word if it already exist then we will increase its count by 1 else we will set its count as 1
//creating an aemty string called result to store our return value
//for each character in the word if it has one then we replace it with (
// else )       