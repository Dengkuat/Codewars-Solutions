const stringExpansion = s => {
    // Good luck!
  }
  console.log(stringExpansion());

  //?input
  //so we given a string 
  //the string includes alphabetic character

  //*info
  //so we supposed to return the expantion of the input string
  //so the input string contains numeric values
  //the numeric values represent the occurence of each preceding that numeric value
  //the return should not have any numeric values

  //!note
  //The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
  //If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
  //Empty strings should return an empty string.

  //!test cases
//   "3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
// "3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
// "3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
// "abcde"     -->  "abcde"           # no digits
// "1111"      -->  ""                # no characters to repeat
// ""          -->  ""                # empty string

//sol
//