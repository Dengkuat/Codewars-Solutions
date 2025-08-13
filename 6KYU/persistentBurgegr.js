function persistence(num) {
    let count = 0;

    while (num.toString().length !== 1) {
        let digits = num.toString().split('');
        num = digits.reduce((product, digit) => product * Number(digit), 1);
        count++;
    }

    return count;
}

console.log(persistence(333)); 

 //?input
 //we have an input which is a positive num / intger

 //*info
 //the the return value should be the mutlplicative persistence
 //this is the number of times you must multiply the digit by num untill you reach a single digit


 //!test cases
//  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

//we iterate though this while the condition is any digita length is not equal to 1 we keep mutlipying though it till we have a one digit number
//convert num into a string and split then into individual strings on there own
//using reeduce to multiply all the digits together