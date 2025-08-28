function factorial(n){
    //your code here
    let result = [];
    if(n === 0) return 1;
    for(let i = 1; i<=n; i++){
        result.push(i);
    }
    return result.reduce((x, y) => x*y);
  }

  //?input
  //a single number 
  //has to be a positive number 

  //*info
  //write a function to find the factorial of that number 

  //!Test cases
  // assert.equal(factorial(7), 5040);

  //so the input is our maximum number
  //then the initial number starts from 0
  //so aslong as the i is not 0 then we will reduce each other untill we have a single digit
  