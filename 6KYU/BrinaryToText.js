function binaryToString(binary) {
    binary = binary.match(/.{1,8}/g);
   return binary.map(e => String.fromCharCode(parseInt(binary, 2))).join('');
}

//?input
//the input is a string of binary integers

//*info
//return the equivalent decoded text into a character
//each 8 bits on the binary string is equial to one character from the ASCII  table
//each string will have atlest 8 character
// incase of a binary empty string our return value should be an empty string

//!test cases
// Characters can be in the range from "00000000" to "11111111" (inclusive)
// Test.assertEquals(binaryToString('01100001'), 'a')
// Test.assertEquals(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')

//spliting the integers using the regix expression globally
//parseInt to convert every intger set into integer 
//using fromCharCode to get the placement position in the ascii table
//joining and returning