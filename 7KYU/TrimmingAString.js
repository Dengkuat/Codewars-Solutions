function trim(str, size) {
    const dots = '...';
    if(str.length <= size){
        return str;
    }
    if(size <= 3){
        return str.slice(0, size).concat(dots)
    }
    str = str.split('');
    const result = str.slice(0, size-3).join('');
    return result.concat(dots);
  }
  console.log(trim('dengkuat',6));
  console.log(trim('He',1));
  console.log(trim('Creating kata is fun',14));
  //?input
  //our input is a string of alphabetic letter

  //*info
  //the first argument is the aplhabetic letters
  //the second argument is the size the letters have to be trimmed
  //if the size is > than the str.length then we will just return the string with no trimming or dotts required
  //our result should end with the ... after we trimm it short 
  //we have a required maximum length > than 0
  //there is no case where our string is empty

  //!test cases
  //trim("Creating kata is fun", 14) should return "Creating ka..."
  //trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
  //trim("He", 1) should return "H...", because 1 <= 3

  //first work on if the string length is less or equal to the size
  //else then we trim the ending till the size then replace with dots...
  //so size - 1 should be out index and where we are timming from
  //using slice array so we changing our string into an array of letter 