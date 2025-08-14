var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
      const arr = Array.isArray(iterable)? iterable :iterable.split('');
      return arr.filter((x, i) => x !== arr[i + 1]);
  }

//?input
//an arguement which is a sequence of a list of items that are repeatitve

//*info
//return the list of items without any elements with the same value next to each other and preserving the original order 

//!test cases
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//decleare an empty array 
//use filter to filter out the ones that are next to each other and are the same
