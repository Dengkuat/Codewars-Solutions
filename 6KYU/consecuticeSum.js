const sumConsecutives = s => {
    // your code
    if (s.length === 0) return result;
    let result = [];
    let sum = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            sum += s[i];
        } else {
            result.push(sum);
            sum = s[i];
        }
    }

    result.push(sum);
    return result;
}
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));

//?input
//an array of integers 
//thoes intgers have a breakable serie of consecutuve numbers

//*info
//so now we have to sum up the integers that are consective and leave the non consecutive ones
//Same meaning: 1 == 1

// 1 != -1

//!test cases
// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

//so using map to perfom the changes on each of the numbers 
//the if that index and the next one are the same then we sum them and add that to the result return array we are returning
