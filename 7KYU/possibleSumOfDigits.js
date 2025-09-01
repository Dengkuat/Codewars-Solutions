function digits(num){
    let arr = String(num).split('').map(Number);
    let result = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            result.push(arr[i] + arr[j]);
        }
    }
    return result;
    
}
//?input
//given a number

//*info
//so we return all posible sum of the two digits of it
//our return is an array of possible sums

//!test cases
// 12345 -> [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

//steps
//we see a clear pattern of this 
//where the first number sums all the remaining digits in the number
//for this we could use the reduce method so the a is the first number and the y is the remainig numbers summing them up like this reduce((x,y) => x+y) but x is the intial number
//we split the number ofc into an array of numbers
//then we iterate thorugh each and using the slice method to slice from the next number to the last one
//num = String(num).split('').map(Number); this to convert the number into an array of numbers so that we can iterate thorugh each of them

//in map, 
//l could also use a double loop 
//then for each initial integer in the loop add it to every i in the inner loop