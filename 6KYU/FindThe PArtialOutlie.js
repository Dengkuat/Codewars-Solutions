function findOutlier(integers){
    //your code here
    let result = [];
    let oddInit = [];
    const oddMan =  integers.forEach(x => x % 2 === 0?result.push(x):oddInit.push(x));
    return result.length === 1? Number(result):Number(oddInit)

  }
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));


  //?input
  //given an array with length > 3 but could be very large containing integers

  //*info
  //comrised of all odd or even intgers appart from one digit that is the odd mans out
  //write a method, function to return this number

  //!test cases
  //[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

//if 