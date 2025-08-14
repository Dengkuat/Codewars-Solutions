function factorial(n)
{
  // Calculate the factorial here
  if(n < 0 || n > 12){
    throw new RangeError;
  }

  if(n === 0){
    return 1;
  }

  let count = [];
  for(let i=1; i<=n; i++){
    count.push(i)
  }
  return count.reduce((x, y) => x*y);
  
}

//?input

//*info
//the factorial of the non negative integer is denotated by n!
//this is the product of all the positive intgers <= to n
//if the intger input is below 0 and greater than 12 then we through a RangeError

//!test cases
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

//so we create a loop that loops from the first integer which is 1 to the nth we want to find the factorial for
//before that we see that if a factorial is 0 then we will return 1 - converting the value of 0! to 1