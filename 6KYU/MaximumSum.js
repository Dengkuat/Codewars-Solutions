function maxSum(arr,range){
    //coding and coding..
    const sums = range.map(x => {
        const [start, end] = x;
        return arr.slice(start, end + 1).reduce((a, b) => a+b, 0);
    });
    return Math.max(...sums)
    
    
}
  //?input
  //array of integers 
  //it contains +, - and 0 and a range list such as
  //[[start1,end1],[start2,end2],...], 

  //*info
  //start and end are the index of the arr and start is always less than end
  //calculate the sum value of each range 
  //(start index and end index are both inclusive)
  //return the maximum sum value

  //!test cases
//   Given arr = [1,-2,3,4,-5,-4,3,2,1], 
//   range = [[1,3],[0,4],[6,8]]
// should return 6

// calculation process:
// range[1,3] = arr[1]+arr[2]+arr[3] = 5
// range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
// range[6,8] = arr[6]+arr[7]+arr[8] = 6
// So the maximum sum value is 6

// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0
