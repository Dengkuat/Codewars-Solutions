// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 5];

//find out the duplicate elements from the arr
//ok l could create a Set this will remove the duplicates 
//the l could use filter the array method 
//to filter out elements in the array that are also in the set

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