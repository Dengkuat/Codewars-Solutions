function sortSequence(sequence) {
    //coding and coding..
      sequence = sequence.join(''); 
      sequence =  sequence.split('0');
      const sortSequence =  sequence.map(x => {
        return x.split('').sort((a, b) => a.localeCompare(b)).join('');
      } );
      const numberArray =  sortSequence.map(w => w.split('').join(','));
      return numberArray.map(str => str.split(',').map(Number).concat(0));

      
  }
  console.log(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]));

  //?input
  //array of numbers containing only postive number including zero as a numbers aswell
  //it can be split to some zero-terminal sub sequence such as [3,2,1,0], [5,6,4,0] .. 

  //*info
  //so we going to sort the array of numbers but the zeros stays in its position untouched
  //zero has to always be at the end
  //then once we split we shall have to short the array according to their sum value in ascending order
  //so we return a sorted array sequence of number
  //sorted according to their original order

  //!test cases
//   sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]) should return
//                [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

//     sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]) should return
//     [1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]

//     sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]) should return
//     [2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]

// split the array into sub array extracting the digits before the zeros into one subarray
//then sort the subarray into ascending order
//join them to make a complete sort of array of integers
