function nbDig(n, d) {
    // your code
    d = String(d);
    let digits = [];
    for(let i=0; i<=n; i++){
        digits.push(i*i);
    }
    digits = digits.join('');
    let count = 0;
    for(let i=0; i<digits.length; i++){
        if(digits[i] === d){
            count ++;
        }
    }
    return count;
}


//let filtered = arr.filter(num => !num.toString().includes("0"));

//?input
//we have 2 inputs
//an integer n and a digit d
//the interger is >=0 and the integer d => (0<=d <=9)
//so digits is between 0 and 9 as a single digit number
//the intger is non negative to any positive number

//*info
//so we square all numbers between 0 and n but saying k = 0<=k <=n
//implmenting a function to take n and d as parameters and returning this count 
// Note that 121 has twice the digit 1.



//!test cases
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

//so hence we squaring the integers between 0 and n 
//creating a loop between 0 and n to square every intgers between thoes numbers 
//having thoes result in an array so we can filter out the other numbers that are not d
//we can use filter method here - using that doesnot include d 
//returning the length and that should be our solution