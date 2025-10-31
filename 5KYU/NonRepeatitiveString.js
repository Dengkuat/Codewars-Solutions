function firstNonRepeatingLetter(s) {
    // Add your code here
    const initalString = s.toLowerCase();
    let unique = [];
    const onlyUnique = s.split('').map(char => {
        if (initalString.indexOf(char.toLowerCase()) === initalString.lastIndexOf(char.toLowerCase())){
            unique.push(char);
        }
    })
    return unique[0]||"";
  }
  console.log(firstNonRepeatingLetter('stress'));

  //?input
  //?a string of character
  //?the characters can be repeative and non repeatitive

  //*info
  //with a function that takes that string and then returns the first character that is not repeated anywhere in the string

  //!test cases
 //For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

  //constraints
  //upper and lower cases letter are considered the same thing or character
  //the function should return the correct case for the initial letter
 //   the input 'sTreSS' should return 'T'. 

 //so what could l do
 //since this is a string then we will turn it into an array
 //why?so we could use the array methods map, foreach to iterate through the array
 //then for that exact string if the character exist in the original string 
 //if it does we add it to the new array we create then that array we will return the first letter which is what we intitally want
