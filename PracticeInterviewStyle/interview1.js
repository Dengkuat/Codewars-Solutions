// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];

//find out the duplicate elements from the arr
//so l sort the array so that the duplicates can be next to each other
//the find out if the item we iterating thorugh and the next one are the same 
//if they are the same then we push into an emtpty array we creating to hold all repeated values
//so l filter out the duplicates then l return it as my final return

function findDuplicate(arr){
   const sortedArray =  arr.sort();
   let repeated = [];
   const result =  sortedArray.map((x, i, arr) => {
    if(x === arr[i+1]){
        repeated.push(x);
    }
   })
   const uniqueSet = [...new Set(repeated)];
   return uniqueSet;
}
console.log(findDuplicate([1, 6, 2, 3, 4, 5, 6, 7, 8, 2, 5, 5]));