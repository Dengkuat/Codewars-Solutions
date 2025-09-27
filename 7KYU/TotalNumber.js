const getSum =  (a, b) => {
    if(a === b )return a;

    // getting all the intgers between the two 
    let sum = [];
    for(let i = a; i<= b; i++){
        sum.push(i);
    }
    return sum.reduce((a, b) => a+b);
}

//?input
//so we are given 2 integers a and b
//so either of this inputs can be positive or negatative


//*info
//so we shall find the sum of all the integers between a and b inclusive of the two 
//if the two numbers are equal then we shall return a and b just
//they are not ordered so that we have to note 
//so even a can be greater than b
//only and only should our function return a number not any other datatpe strciktly

//!test cases
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


//..
//so will handle if they are the same first then we will see what next later
//then we shall have to find the other things which is the numbers betwwen the two inputs
//so how? we can iterate through this maxmum a and minimum b
//then keep everything inside an array
//so for that array we could find there total sum and return that sum
//for the sum since they are an array then we could do this using reduce
//its a call back function that return a single number due to a tranformation of everyother item in the array
//so return the sum and that should be our answerr....
