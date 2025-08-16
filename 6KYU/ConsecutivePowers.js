function sumDigPow(a, b) {
    // Your code here
    let result = [];
    for(let num=a; num<=b; num++){
        const digits = String(num).split('').map(Number);
        const powerSum = digits.map((x, i) => x**(i+1)).reduce((x, y) => x+y);
        if(powerSum === num)result.push(num);
    }
    return result;
  }

  
  //?input
  //
  
  //*info
  //so we create a function that checks when a number is split raised to the power and devided then sumed up to give us teh sam number 

  //!test cases