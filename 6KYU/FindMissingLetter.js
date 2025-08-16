function findMissingLetter(array)
{
    let find = [];
    const AL = array.map(x => x.charCodeAt());
    for(let i=1; i<AL.length; i++){
        if(AL[i] !== AL[i-1]+1){
            find.push(AL[i-1]+1)
        }
    }
    return String.fromCharCode(find);
}
//if(x-1) !== x[i] {
// return x}

//?input
//array is taken in as an input
//array of alhabetic letters

//*info
//return the missing letter from the array 
//they array patern is consistent and there is only this one missing letter in the array

//!test cases
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

//iterate through the array and for every letter in the array we are going to conver them into the ascii table 
//then we will compare if the first and next letter are conscutice aswell if they are not then that our missing letter we are trying to find 
// then convert that letter back to the string using that ascii letter and return it as out final output