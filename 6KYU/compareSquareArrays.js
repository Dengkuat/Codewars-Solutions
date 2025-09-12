function comp(array1, array2){
    //your code here
    //if not array 1 or 2 and if there length are not equal
    if (!array1 || !array2 || array1.length !== array2.length) return false;

    //sorted array so they could be matched by the for loop
    array1 =  array1.map(x => x*x).sort((a, b) => a-b);
    array2 =  array2.sort((a, b) => a-b);

    //iterate through arr 1 to compare if they equal to array 2
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {return false} }return true 
}
  //?input
  /* 
  input of 2 arrays 1 and 2 -> array of integers

  */

  //*info
  /*
  with a function that checks whether the 2 arrays have the same elements
  same multiples we mean such as in arr1 could be the number squared from array 2
  and array 2 can have the same integers square root to give u the same integer in 1 prety much
  the order does not really matter so regardless they need to have the same integers -> multiples
  the arrangment of the integers squared and the integers doubled does not really matter

  constraints
  a and b can range from anything that can be an [] or {}
  aswell as a and b can be null -> so if either of them are null then meaning we will return false automatically since null is an empty array no integers in it or absence of a value 
  */

  //!test cases
  /* 
  Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.
  */

/*
so our output could is a boolean expression of true or false
l could iterate thorugh a using map array method
so for every value square then we will push the return from the array into an empty array
so we shall compare if every item in a is eaual to every item in b
so if they equal to each other then we will return true since its matched the comparison
*/