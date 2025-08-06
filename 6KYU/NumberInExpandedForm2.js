// NumberInExpandedForm2 //
function expandedForm(num) {
    // Your code here
    const digits = String(num).split('.')
    const first= digits[0];
    const second= digits[1];
    const part1 = first.split('').map((n, i, arr) => n * 10 ** (arr.length - i - 1)).filter(num => num!==0).join(' + ');
    const part2 = second.split('').map((n, i) => n + '/' + 10 ** (i + 1)).filter(num => !num.startsWith('0/')).join(' + ');
    if (part1 && part2) {
        return part1 + ' + ' + part2;
      } else if (part1) {
        return part1;
      } else {
        return part2;
      }
  }

  //?input
  // given a number 
  //decimal numbers
  //positive

  //*info
  //returning it as a string in expanded Form

  //!test cases
//   807.304 --> "800 + 7 + 3/10 + 4/1000"
//   1.24  --> "1 + 2/10 + 4/100"
//   7.304 --> "7 + 3/10 + 4/1000"
//   0.04  --> "4/100"

// covert num to string - split is a method 
//split('.') - separate num 
//access 2 parts separatly
//first part - split, map, join(' + ')
//seond part - split, map, join(' + ')
//then join part1 and part2

