const solution=number=>{
  let newArray = [];
  for(let i =0; i<number; i++){
    if(i % 3 ===0 || i % 5 === 0){
    newArray.push(i)
    }
  }
  return newArray.reduce((x, y) => x+y)
}

//?input
//so we will be given an input of a single number

//*info
//so just like what the question has inthe test cases we are supposed to find the numbers that are multiples of 5 and 3 or even both then add them all together and return the final output as expected

//!test cases
// if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If a number is a multiple of both 3 and 5, only count it once.

//what can l do really
//so l am going to use a for loop right
//then the maximum number should not cross our input that are divisible by 3 and 5 or both