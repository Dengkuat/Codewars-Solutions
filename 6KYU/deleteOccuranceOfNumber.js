function deleteNth(arr,n){
    const count = {};
    const filteredArr = arr.filter(num => {
        count[num] = (count[num] || 0) +1;
        return count[num] <= n;
    });
    return filteredArr;
  }

  //?input
  //with 2 parameters given 
  //given an array of integers
  //the integers are repeative

  //*info
  //so we creating a new list from the input
  //the new list should contain each number of the list of at most N times
  //the input array cannot be mutated so we cannot reorder it again the order has to remain
  //in my though
  //with the integer in the input the input array can not have the integers that repeat themselves more than the input number

  //!test cases
//   For example if the input number is 2, 
//   and the input list is [1,2,3,1,2,1,2,3], 
//   you take [1,2,3,1,2], drop the next
// [1,2] since this would lead to 1 and 2 being 
// in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// so we could create an object to count each appearence
//using filter array method to create an empty array 
//if the number does not exist then we let it be 0 instead of undefined then we add  1 if it is then seen
//so if the count is less than limit then we return the new array containing thoes numbers