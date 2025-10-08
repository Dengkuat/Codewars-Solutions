const nthFibo = n => {
    // Return the n-th number in the Fibonacci Sequence
    if (n === 1) return 0;
    if (n === 2) return 1; 
    let fiboniacci = [0, 1];
    for(let i = 2; i <= n-1; i++){
        fiboniacci.push(fiboniacci[i-1] + fiboniacci[i-2]);
    }
    return fiboniacci[fiboniacci.length-1];
  }

//?input
//so we shall be given a single digit 
//that digit couuld be a number 
//the number is always poitive meaning greater than zero

//*info
//with a function that when given an input it should return the nth number in the fibonacci sequence

//!test cases
// For example:

//    nthFibo(4) == 2

//why because 2 is the 4th position in the fiboniacci sequence
//so lets say the first two number in the fibonacci are 0 and 1 then the rest 0f the numbers are the sum of the previous 2 numbers 

// const chai = require("chai");
// const assert = chai.assert;

// describe("Tests", function(){
//   it("Example tests", function(){
//     assert.strictEqual(nthFibo(1), 0,"1-st Fibo");
//     assert.strictEqual(nthFibo(2), 1,"2-nd Fibo");
//     assert.strictEqual(nthFibo(3), 1,"3-rd Fibo");
//     assert.strictEqual(nthFibo(4), 2,"4-th Fibo");
//   });
// });

//procedures
/*
so the fibonacci sequence goes like this right 
if the first is 0 and the next is 1 then 0 + 1 = 1
so the next number is the sum of the previous 2 numbers 
so the next shall go like 1 + 1 = 2
1 + 2 = 3, 3 + 2 = 5 
so we shall have a sequence of numbers like this 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34

alright so since we have this then our input is a position to which the sequence number is located 
so if our input was 4 then we go to position of 4 and return the element or number in that position which is 2 
so now l could first have an array of such sequence till any number l could use a loop to do so
then we will be looking thorugh the index of the numbers so we will return the index if the number is 4 then we will return the index of 4 - 1 to pick out that exact number
and retrurn that as our final output  
*/

/*
what l did 
l created an empty array that we shall make to hold all the fibomiacci sequence from 2 to that number input n
then using a for loop to loop through each individual number adding the previous 2 integers to make that number that then pushing it to the empty sequence 
so after l just return the last intger which is the return value we wanted 
  if (n === 1) return 0;
    if (n === 2) return 1; 
    so here we assignbed the two begiiner numbers since the are the 2 numbers given for the starter so when input one then return is zero automatically
*/
