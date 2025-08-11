function findMultiples(integer, limit) {
    //your code here
    let count = [];
    for(let i = integer; i <= limit; i++){
        if(i % integer === 0){
            count.push(i);
        }
    }
    return count;

  }
  console.log(findMultiples(2, 6));

  //?input
  //2 argument 1, is the multiple digits and 2, is the limit range

  //*info
  //a function that takes 2 integers n and a limit integer aswell
  //the function should return a list of numbers that are multiples of n that cannot go above the limit

  //!test cases
  //For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
  //n = 2; limit = 6 --> [2, 4, 6]
  // n = 2; limit = 5 --> [2, 4]

  //iterate through the intput 
  //have a condition where the digits cannot go above out input limit
  //then find the multiples of the first arguments