function alphabetPosition(text) {
    text = text.toLowerCase();
    let alphabet = [];
   for(let i=0; i<text.length; i++){
    if (text[i] >= 'a' && text[i] <= 'z') {
        alphabet.push(text[i].charCodeAt(0) - 96);
   }
}
   return alphabet.join(' ');

  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))

  //?input
  //we given a string of character alphabet

  //*info
  //replace every letter with its position in the alphabet
  //if not character then skip and dont return it 

  //!test cases
//   Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//
//we will use a regix expression to only convert alphabetic characters
//using the spread opeartor spacing the character then getting their charCodeAt position in the ascii table 