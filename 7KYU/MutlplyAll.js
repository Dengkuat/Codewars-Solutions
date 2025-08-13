function multiplyAll(arr) {
    return function (multiplier){
        return arr.map(x => x*multiplier);
    }
}

//?input
//array of intergers

//*info
//ur function must return another function which takes a single intger as an arument and returns a new array]
//the return should consit of each integer from the first array multiplied by the integer
//we cannot mutate the original array

//!test cases
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

//we can use the reduce array method to return a single array of intgers multiplied by the second string
