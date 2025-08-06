function solution(nums){
  
    return (nums === null || nums.length === 0) ? []:nums.sort((a, b) => a-b);
}

//?input 
//array of integers 

//*info
//sort the passed in array of integer
//where if the function passes in an empty array or null then we retun an ampty array aswell

//!output
//a sorted array of integers which arent null or empty
//first step working with the empty array or null situation
//use sort() in asc order 
//then return the sorted array
