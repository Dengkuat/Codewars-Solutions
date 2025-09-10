function waveSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0) {
            if (!(arr[i] >= arr[i+1])) return false;
        } else {
            if (!(arr[i] <= arr[i+1])) return false;
        }
    }
    return true;
  }

  console.log(waveSort([4, 1, 7, 5, 6, 2, 3] ));
  //?input 
//   a list of integers in sorted WAVE order 
//   if the alternative number is mot less then their immediate neigbors 
  //meaning then that other alternative itek are not greater than their immediate neighbours

  //*info
  //so we are supposed to implement a function that takes in a list of integers and sort then into a wave order
  //the function shouldnt return anything
  //the result array shouldnt necessarlily match anyone in the test, 
  //a function checks if the array are in wave sorte
  //so we can return wave or order if at all the array is in wave form else the array is not wave-sorted

  //!test cases
  //Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

  //steps 
  /**
so here l use a for loop where i is less than the last item in the arrry
then we target only the even indexed items since they should always be the greater ones than in the odd index
so from an empty array l created alright
//if the even based indexed value is greater than the next one directly to it then we add it to the empty array we created
//so we shall compare if the two array are the same if they are the same then we return true to mean it is wave sorted
else then it is not wave sorted so there we will return false in that case
   */