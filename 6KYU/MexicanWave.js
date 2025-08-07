function wave(str){
    if(str.length === 0){
      return [];
    }
  
    let result = [];
  
    str.split('').forEach((char, index) => {
      char === ' '
        ? null
        : result.push(`${str.slice(0, index)}${char.toUpperCase()}${str.slice(index + 1)}`);
    });
  
    return result;
  }
  //?input
  //so our input is a string 

  //*info
  //we will have to change it to a mexican wave
  //the string is initally lower case and can have spaces
  //so for every letter in the word that stands up we will have to change it to upperCase and return a sequnce of string following that pattern
  //in a case where the string is empty then we will be returning an empty array - []
  //we will be ignoring the empty spaces between the letters

  //!test cases
    // "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    // " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]

    //...
    //dealing with an empty string as  we will return an empty array
    //use forEach - since it has no return value and not map because map creates a new array / forEach just collects ur data that u worked on
    //convert string into array
    //iterate through each character in the array
    //slice to cut out the character we want to change to upperCase() then adding it back to the inital string which we will be returning 
