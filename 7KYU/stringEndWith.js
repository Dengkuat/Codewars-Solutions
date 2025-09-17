function solution(str, ending){
    return str.endsWith(ending);
  }

  //?input
  //3 parameters
  //str is the string input composed of alphabetic characters
  //ending is also a string of alpahabetic characters that tells us if the str input ends with ending

  //*info
  //writing a fuctin that chrcks if the first argument ends with the secnd argument ending
  //so we shall be returning true or false boolean if at all that str ends with the ending

  //!test cases
//   Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

// solution
//l could simply implement the endsWith string method