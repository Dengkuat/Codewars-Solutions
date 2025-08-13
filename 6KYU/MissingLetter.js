function findMissingLetter(array){
 let codes = array.map(x => x.charCodeAt());
 for(let i=0; i<codes.length; i++){
  if(codes[i] + 1 !== codes[i+1]){
    return String.fromCharCode(codes[i]+1);
  }
 }
}
//?input
//consecustive increasing array of letters as input

//*info
// return the missing letter from the array
//the array letter will keep increasing in paterns 

//!test cases
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

//
// convert the array alphabets to ascii position after iterating thruogh each digit using map and return them using the charCodeAt();
//