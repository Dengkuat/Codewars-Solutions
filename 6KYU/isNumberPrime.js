function isPrime(num) {
  if(num <= 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;
  let count = 2;

  for(let i = 3; i <= Math.sqrt(num); i += 2){ if(num % i === 0) count++}
 if(count > 2) return false;
  
  return count === 2;
 }


  //?input
  //so we are taking in an intger as a parameter 
  //it is a single integer

  //*info
  //we  supposed to return a boolean expression of either true or false depending on the state of the integer
  //the state: either is prime -> true or is not prime -> false
  //abite about prime -> a prime number is a natureal number that is > 1 and has no other positive diviser unless one and its self

  //requirement
  //assuming this shall only be a postitive intger input so no case of a negative number as an input
  //no case of a input of a negative dosn't gatante that it wont appear as a test case or an edge use case of 0 could be included aswell


  //!test cases
    //   is_prime(1)  /* false */
    //   is_prime(2)  /* true  */
    // is_prime(-1) /* false */

    //thought
    /*
    this can be a very good examples of prime numbers 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
    so they are never less than 1 and always having 2 numbers that can divide it completely without any reminader
    such as 1 and itself
    so l could iterate though the input number from 1 to the input 
    we could use a for loop will work forsure incrementing each intger untill we reach our input integer
    so l could use an if statement so if a that interated integer if the input is divisible by the iterabted value and the solution has no reminder then we shall add it to our array that l shall create 
    so we could if the length of that array containing all the divisibles of input if more than 2 then that input is not prime else prime
    again if the intger is less than 1 then its definetly not a prime 

    Why did my code time out?
    Our servers are configured to only allow a certain amount of time for your code to execute. In rare cases the server may be taking on too much work and simply wasn't able to run your code efficiently enough. Most of the time though this issue is caused by inefficient algorithms. If you see this error multiple times you should try to optimize your code further.
    Does it answer this question 

    alternative 
    since 1 is not prime, 2 is the only prime number we could have that in an if statement to limit and reduce the time coplexity
    have our count as 2 since a prime only has 2 dvisibles
    using math.sqt built in method
   Math.sqrt() static method in JavaScript returns the square root of a number. It is a built-in function of the Math object
    */