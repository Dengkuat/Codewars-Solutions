function solution(str){
    let splitString = [];
   for(let i=0; i<str.length; i+=2){
    splitString.push(str.slice(i, i+2));
   }
  if (splitString.length > 0) {
   let last = splitString.length - 1;
   if(splitString[last].length === 1){
    splitString[last] = splitString[last]+ '_';
   } 
    }
   return splitString;
}

//?input
//a string of alphabetic characters

//*info
//split the strings into two characters 
// if the string is an odd number meaning 1 then we shoudl replace the missing second character with a final pair which is an underscore_


//!test cases
//  'abc' =>  ['ab', 'c_']
//  'abcdef' => ['ab', 'cd', 'ef']

//split them into 2 characters'
//then we check if the last one is 2 characters else we append there he underscrore;