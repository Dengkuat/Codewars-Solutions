const createPhoneNumber = numbers =>{
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

//?input
//so we have an array of 10 integers right from 0-9

//*info
//with a function that acccepts the array of 10 integers that return a string where thoes numbers are in the form of a phone number

//!test case
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");

//!Edge cases
//the return format must be correct in order to complete this challege 
//not forgeting the space after closing the parentheses!

//what must we do?]
//so we have to split the string into subarray of 3 first, 3 second and 4 last 
//since our return should be a string 
//the first 3 numbers are in parenthesis
//then the next are clean followed by a dash then the 4 integers last

//so since we know that there will be 10 gits not more and not less then we could just use the backticks and encord everything there like number[0]