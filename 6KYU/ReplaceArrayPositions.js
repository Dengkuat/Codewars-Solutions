function alphabetPosition(text) {
    return text
                .toLowerCase()
                .split('')
                .map(char => !/[a-z]/.test(char) ? null : char.charCodeAt(0) - 96)
                .filter(c => c !== null)
                .join(' ');
  }
  
  //?input
  //a string of aplhabetic characters
  //cases insensitive

  //*output
  //replace each letter in the string with its position in the alphabet
  //such as "a" = 1, "b" = 2, etc.

  //!test cases
    // Input = "The sunset sets at twelve o' clock."
    // Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

    //since we case insenstive then we will convert each character in the string to lower case letters
    //then we will iterate through each character in the string - with map
    //so in the ascii the first lower cases alphabet a is at 97 so we will subtract 97-96 to get the final position for a as 1 instead of 96 as we will do this for all the characters in our input string



  