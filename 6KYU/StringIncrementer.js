function incrementString (strng) {
    // return incrementedString
    const result = strng.split('').map(Number);
  }
  console.log(incrementString('foo'));
  console.log(incrementString('foobar23'));
  

  //?input
  //a string that cantains an integer and alpphabetic character all together
 
  //*info
  //so we shall have to return a new string alright
  //the new string should be an increament of the old one just by one that is if the string even contains a number
  //so we come to if the sting has no number at the end, nice then we just add a one at its ends and thats it

  //!test cases
// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

//!note
// Attention: If the number has leading zeros the amount of digits should be considered.


//deng what can we do
//alright we can just have multiple if statements 
//the first can be if there isnt any number at the end then we shall just increament a one as the instruction say
//then we check if 
//alright another thought this ends
//listen lets just separate the digits and the characters alone increament the digits add them back there to fit perfectly again as the instruction say
//since this is a string then we shall have to filter out the character and turn them into real numbers to do the clean math 
//then increament and and concat it towards the end of the string return that and we should be good