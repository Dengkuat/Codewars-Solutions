function persistence(num) {
    //code me
    let count = 0;
    while(num > 9){
        const arrNum =  String(num).split('').map(x=>(Number(x)));
        num =  arrNum.reduce((a, b) => a*b, 1);
        count++
    }
    return count;
    
 }
 //?input
 //positive parameter num 

 //*info
 //should return multiplicative persistence
 //this is the number of times u must multiply the difits in num untill u reach to one singke digit

 //!test cases
//  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

//
// split the num into arr of num 
//using reduce to multiply each digit with each other 
//haveing a while loop with integers > 9 not pass through