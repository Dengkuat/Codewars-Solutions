function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a); // sort descending
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++)
      sum += arr[i] - arr[i + 1];
  
  return sum;
}
//?input
//an array of integers

//*info
//so we gave to sum the difference between teh consecutive pairs in the array in descending order

//!test cases
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//what to do
//so we first arrange the array in descending order
//so using map then we get that value - the next one 
//then using reduce to sum up that value and return it as our final 
