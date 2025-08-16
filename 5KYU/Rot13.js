function rot13(message) {
   return message
     .split('')
     .map(x => {
       if (/[a-z]/.test(x)) {
         // lowercase
         return String.fromCharCode(((x.charCodeAt(0) - 97 + 13) % 26) + 97);
       } else if (/[A-Z]/.test(x)) {
         // uppercase
         return String.fromCharCode(((x.charCodeAt(0) - 65 + 13) % 26) + 65);
       } else {
         // non-alphabetic characters unchanged
         return x;
       }
     })
     .join('');
 }

  //?input
  //a string a alphabetic characters

  //*info
  //return a string of alphabetic characters only that
  //returns a cipherd with rot 13
  //if number or special character then return them the way they are
  //only letters from the alphabet

  //!test cases
//   'deng2' => 'qrat2';

//The rot13 function is used to encode or decode text using the ROT13 cipher, where each letter is replaced by the letter 13 positions later in the alphabet. It preserves case (uppercase/lowercase) and leaves non-alphabetic characters unchanged.
// 	Takes a string input (message).
// 	Splits it into characters.
// 	Maps each character:
// 	If lowercase → shift 13 letters (a ↔ n).
// 	If uppercase → shift 13 letters (A ↔ N).
// 	If not a letter → keep unchanged.
// 	Joins characters back into a string.
// 	Returns the transformed result.