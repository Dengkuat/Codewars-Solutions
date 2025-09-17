function lastDigit(n, m) {  
    const str = String(n**m);
    const last = str[str.length-1];
    return BigInt(last);

  }

  //?input
//   so we have2 inuts which are the n and m
// they are non negative digits 

  //*info
  // a fiunction that takes in a non-negaive digits a and b that returns the last decimal if a **b 
  //not that a and b can be very large numbers
  //so 0**0 is 0 but we will be taking it as 1
  //assumption that our input shall alwasy be valid so no testing as we doing the kata

  //!test cases
//   lastDigit(4n, 1n)            // returns 4n
//     lastDigit(4n, 2n)            // returns 6n
//     lastDigit(9n, 7n)            // returns 9n  
//     lastDigit(10n,10000000000n)  // returns 0n

//
//so l first converted input to string than map them as number then find the decimal of both of them
//since they collection of intergers, we convert it back to a sting to split them into an array to get the last index and convert them to bigInt
//const a = String(n).split('').map(Number);
// const b = String(m).split('').map(Number);
// const decimal =  a**b;
// const decimalArr =  String(decimal).split('');
// const lastIndex =  decimalArr[decimalArr.length-1];
// return BigInt(lastInde
//!this works tho it fails the test because we cannot convert was was alread bigInt into big int again so it passes test of small ints tho big into fail
//so an alternative
//without converting it to a number
//get the decimal and convert them into a string
// get the last digit and convert that into a bigInt return it as solution