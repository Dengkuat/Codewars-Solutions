String.prototype.toAlternatingCase = function () {
  return this.split('')
             .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
             .join('');
}


  //?input
  //a function that takes in a string 
  //the string can be case insenstive

  //*info
  //return a string of characters
  //for each chaeacter of the string should return an oppsite case
  //such as if input is YeS => yEs just like the test cases

  //!test cases
  // "hello world".toAlternatingCase() === "HELLO WORLD"
  // "HELLO WORLD".toAlternatingCase() === "hello world"
  // "hello WORLD".toAlternatingCase() === "HELLO world"
  // "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
  // "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
  // "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
  // "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
  
//split string - this keyword
//iterate through each character when char is lowercase we make it uppercase and when character is upper case we make it lower case
//then join the string again as it was before 