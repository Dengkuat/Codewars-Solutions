function capitalize(s){
    const even = [];
    const odd = [];
    s.split('').forEach((char, index) => {
        if(index%2===0){
            even.push(char.toUpperCase());
            odd.push(char);
        } else{
            even.push(char);
            odd.push(char.toUpperCase());
        }
    });
    return [even.join(''), odd.join('')];
}

  //?inout
  //so we have an input of a string 
  //the string is initially all lower case letters
  //the input string has no spaces

  //*info
  //captalize the letter that occupies the even numbers and odd numbers separaly
  //return as shown below
  //index 0 will be considered even

  //!test cases
//   capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

//
//iterate through the input string
//then captalize the ones that are in the even index as vice versa for the other one
//return the final output

