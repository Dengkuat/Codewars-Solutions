function countBits(n) {
    // Program Me
      return n.toString(2).split('').reduce((a, b) => Number(a)+Number(b), 0);
  }


  //?input
  //takes an int as an input

  //*info
  //returns then number of bits that are equal to one in the binary representation of that number
  //input is positive

  //!test cases
  // Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
  

  //binary representation of 1234 is 10011010010 



