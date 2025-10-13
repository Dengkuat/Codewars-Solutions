function alphanumeric(string){
    //your code here

    string = string.split('');
    const result = string.map(char => {
      const isLetter = /[a-zA-Z]/.test(char);
      const isNumber = /[0-9]/.test(char);
      if(isLetter || isNumber){
        return true;
      }else{
        return false;
      }
    });
      return result.every(Boolean);
        
  }
  console.log(alphanumeric("Mazinkaiser0-]"));
  console.log(alphanumeric("hello world_"));

  //?input
  //a string that is mixed alright

  //*info
  //so for this case we shall have to validate if the user input is alphabetic
  //good so our string is not nil, null, -> so it is always avalilabe as an input so its never empty so no need for that test case
  

  //! conditions
  /*
  atleast having one character not the entire thing right
  '' is not valid as a character
  so our characters can range from upper to lower cases in varation
  no white space
  no underscore or dash 

  */


  //!test cases
//   const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(alphanumeric("Mazinkaiser"), true)
//     assert.strictEqual(alphanumeric("hello world_"), false)
//     assert.strictEqual(alphanumeric("PassW0rd"), true)
//     assert.strictEqual(alphanumeric("     "), false)
//   });
// });!/[0-9]/

//..
//so in mind l think this can only be true when the chatacter are complete upper or lower cases with nothing other than that there
//even spaces are not considered as true character
//ah so in actuall sence they want to check if the characters only include the a-z thing
//the only digits that can be there are the ones that are from 0 to 9 which we can call them the natural numbers 

//..
//aight what can we do 
//so we shall have test cases that when something is not part of the alphabet and the natural numbers then we shall return false otherwise we shall return true they are acctually alphabetic in nature
//so we could also use the rejex expression - if input !/[a-z]/ or  return false
//at the same time we shall change all the letters to lower case so they all easy to test 
//// !/[a-z]/.test(char)
//we could use if some() array method that can check if there are items there that we dont need