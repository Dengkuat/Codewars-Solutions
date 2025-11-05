function maximumSeating(seats) {
  let padded = [0, 0, ...seats, 0, 0];
  let count = 0;
  for (let i = 2; i < padded.length - 2; i++) {
      if (padded[i] === 0 && padded[i - 1] === 0 && padded[i - 2] === 0
          && padded[i + 1] === 0 && padded[i + 2] === 0) {
          padded[i] = 1;
          count++;
      }
  }
  return count;
}

//?input 
//so we are given an array of seats 
//0 and 1

//*info
//so we are supposed to return the maximum number of new people which can be seated 
//as long as ther is at least a gap of 2 seats between people
//empty seats are given 0
//occupied seats are given as 1
//dont move any seat which is occupoed even if there are less than 2 seats apart meaning we cannot mutaten the format of the array


//!test case
// [0, 0, 0, 1, 0, 0, 1, 0, 0, 0] ➞ 2
// [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]
// [0, 0, 0, 0] ➞ 2
// [1, 0, 0, 1]
// [1, 0, 0, 0, 0, 1] ➞ 0
// There is no way to have a gap of at least 2 chairs when adding someone else.

//! Notes

// Notice how there may be several possibilities for assigning seats to people, but these cases won't affect the results.
// All seats will be valid.


