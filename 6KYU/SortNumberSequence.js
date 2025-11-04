function sortSequence(sequence) {
  let newArray = [];
  for (let i = 0; i < sequence.length; i += 4) {
      newArray.push(sequence.slice(i, i + 4));
  }

  const sortedArray = newArray.map(x => {
      let sorted = x.slice(0, x.length - 1).sort((a, b) => a - b);
      return [...sorted, 0];
  });

  const joinedArray = sortedArray.map(sub => [sub.reduce((a,b)=>a+b,0), sub]);
  joinedArray.sort((a,b) => a[0] - b[0]);

  const sortedSum = joinedArray.map(x => x[1]);

  return [].concat(...sortedSum);
}

//?input
//so input is an array of integers
//integers include non negative numbers and 0

//*info
//so we are supposed to split sub sequence where zero ends such as [3,2,1,0], [5,6,4,0] ..
//so after that we are supposed to sort the sequence in ascending order so the zero is always at the end, so after all of that we will sort the sub sequence according to their sum value ascending order to

//!test cases
// sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]) should return
// [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

// sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]) should return
// [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]

// sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]) should return
// [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]