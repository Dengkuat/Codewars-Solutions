function minMax(arr){
    //method 1
   const min = Math.min(...arr);
   const max = Math.max(...arr);
   return [min, max];
   //method 2
   const sorted = arr.sort((a, b) => a-b);
   return [sorted[0],sorted[arr.length-1]];

  }

  //?input
  //an array if random intgers then
  //each has atleast one item


  //*info
  //a function that returns both the minimum and maximum number from a given array
  //the array has items >= 1
  //so no need for checking the length 
  //its always an array so no need to worry about the array type 

  //!test cases
//   [1,2,3,4,5] --> [1,5]
//     [2334454,5] --> [5,2334454]
//     [1]         --> [1,1]


//so we supposed to retrn the greatest and lease
//from this l could use built in math functions
// Math.max and Math.min 

//l could also sort the array and return the first and last index in that sorted array which are usually the first and last items since my array will be arranged in ascending order