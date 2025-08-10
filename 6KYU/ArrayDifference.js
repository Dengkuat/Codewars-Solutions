function arrayDiff(a, b) {
  return a.filter( e => !b.includes(e));
}

//?input
//we given an input of 2 array
// a and b


//*output
//while the array a order is preserved and not mutated
//the function should remove all the occuruence of array a that are present in array b

//!testcases
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].


//
//so we cannot use sort array a since its order needs to be presrved
//so we filter out elements in a that are contained in b