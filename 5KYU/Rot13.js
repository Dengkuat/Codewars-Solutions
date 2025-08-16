function rot13(message){
    //your code here
    let result = [];
    message = message.split('');
    return message.map(x => {
        if(/[a-zA-Z]/.test(x)){
           return String.fromCharCode(((x.charCodeAt(0) - 97 + 13) % 26) + 97);
        } else {
           return x;
        }
    });
  }
  console.log(rot13('denG2'))

  //?input
  //a string a alphabetic characters

  //*info
  //return a string of alphabetic characters only that
  //returns a cipherd with rot 13
  //if number or special character then return them the way they are
  //only letters from the alphabet

  //!test cases
//   'deng2' => 'qrat2';