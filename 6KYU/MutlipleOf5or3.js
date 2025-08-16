function solution(number){
    let result = [];
  for(let i=0; i<number; i++){
    if(i % 3 === 0){
        result.push(i);
    } else if(i % 5 === 0){
        result.push(i)  
    } else if(i % 3 === 0 && i % 5 === 0){
        result.push(i)
    }
  }
  return result.reduce((x, y) => x+y, 0);
}

//?input
//1 arguement is a number 

//*info
//a function that returns the sum of all multiples of 3 or 5 less than the number
// if the number is a neg then we returning a 0
// if that number a multiple of 3 and 5 then we count it once itn

//!test cases
// natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//then reduce to get the total sum of the array items