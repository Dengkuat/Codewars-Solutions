const zeros = n => {
  const power = [];
  for (let i = 5; i <= n; i *= 5) power.push(i);
  return power.reduce((acc, p) => acc + Math.floor(n / p),0);
};

//?input
//a single non negative integer

//*info
//sio we have to calculate the number of trailing zeros in a factorial of a given number 

//!test cases
//Be careful 1000! has 2568 digits...
// Examples
// N	Product	N factorial	Trailing zeros
// 6	1*2*3*4*5*6	720	1
// 12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2

//hint
//You're not meant to calculate the factorial. Find another way to find the number of zeros.

//Bad man what can we do?
//ok so even if the hint says we cannot find the factorial 
//l will first do that 
//finding the factorial of a number alright 
//meaning 3! = 3x2x1 = 6 right 
//so we willuse a for loop right and iterate through each value as we add that to the new array l shall create then we will reduce them all to the multiple using the reduce method right 
//so trailing zeros meaning, how many last zeros do we see from that output 
//so l will reverse the string then check if the first value is zero and again if that value is the same as the next one else then we will quite that and return the count of thoes values
//l think that should work for us

