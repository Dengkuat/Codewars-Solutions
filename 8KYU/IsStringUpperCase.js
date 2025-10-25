String.prototype.isUpperCase = function() {
    // your code here
    return this.split("").every(char => char === char.toUpperCase())
  }

  //?input
  //a string of mixed case letter

  //*info
  //we return true if all the string are in upper case else we returning false if even one letter is lower

  //!test cases
//   "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

  //split the string into an array of characters 
  //l am going to use every to see if one item in the array sutisfies the condition of upper case letter
