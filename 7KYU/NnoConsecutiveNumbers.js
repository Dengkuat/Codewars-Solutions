function allNonConsecutive (arr) {
    let nonConsecutive = [];
    arr.forEach((num, index, arr) => {
        if(index < arr.length - 1){
            if(arr[index+1] !== arr[index]+1){
                nonConsecutive.push({ i: index + 1, n: arr[index + 1] });
            }
        }
        
    });
    return nonConsecutive;
}
//?input
//an array of numbers

//*info
//finding all the elements of an array that are non consecutive
// an number is non consecutive if it is not exactly one larger than the previous element in an array
//we forgiving the first elements and it is never consudered non consecutive
//E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.
//if the array if the whole array if consecutive then we will return an empty array
//also if the array has only one element then we return an empty array aswell
//the array of always containing numbers, the numbers will also be unique and always in ascending order, it could contain positive or even negative integers , the gap of the consecutive could be larger than one or two

//!test cases
// [1,2,3,4,6,7,8,15,16]
// [
//     {i: 4, n:6},
//     {i: 7, n:15}
//   ]

//in my understanding the non consective integers in the array shall be returned as n and its index as i aswell this has to be done to all the nonconsecutive numbers in the array
//i could iterate through the array then 
//decleare an array that will collect all the consecutive numbers with their index
//for the num, if the previous one + 1 is not that number then we will be returning that number and its index in the array
//we could use map to irerate since we will be returning a new array of our final results