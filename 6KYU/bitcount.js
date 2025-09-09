function countBits(n) {
    // Program Me
      return (n.toString(2).split('').filter(x => x !== '0')).length;

  }
  console.log(countBits(1234));

  //?input
  //an integer is never negative 

  //*info
  //a function that takes an integer as input
  //returs the number  of bits that are equally in othe binary representation of that number

  //!test cases
//   Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// assert.strictEqual(countBits(0), 0);
//     assert.strictEqual(countBits(4), 1);
//     assert.strictEqual(countBits(7), 3);
//     assert.strictEqual(countBits(9), 2);
//     assert.strictEqual(countBits(10), 2)

//steps
//for binary conversion we multiply by 2 power a specific power
//the power can be marked with the position of  where that specific integers seats than the other
//l could iterate using map since l need a  return of a new array of the binary form of that number
//so for each of that iterated number n * 2 ** power
//so  for my power it could simply be llike -> 
// (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰)

// second method  - > using this (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰) so its long
// function countBits(n) {
//     let bits = [];
//     while (n > 0) {
//       bits.unshift(n % 2);
//       n = Math.floor(n / 2);
//     }
  
//     const expanded = bits.map((bit, index) => bit * (2 ** (bits.length - 1 - index)));
  
//     const ones = expanded.filter(val => val > 0);
  
//     return ones.length;
//   }
  
//   console.log(countBits(1234)); 