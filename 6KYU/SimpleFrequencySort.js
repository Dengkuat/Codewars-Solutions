const solve = arr => {
  //..
  return arr.sort()
}
console.log(solve([2,3,5,3,7,9,5,3,7]));
console.log(solve([4,9,5,0,7,3,8,4,9,0]));

//?input
//an array of integers as usual 

//*info
//so we will sort them in a decending order way and return that

//!test case
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.