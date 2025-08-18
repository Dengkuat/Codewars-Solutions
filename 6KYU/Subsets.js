function estSubsets(arr) {
    return 2**new Set(arr).size-1;
}
    

//?input
//Subset of elements can be integers or even strings of characters
//the elements may occur more than once, return the nuber of nonemplty subsets that do not contain a repeated element

//!test cases
// set numbers = {1, 2, 3, 4}
// {{1}, {2}, {3}, {4}, {1,2}, {1,3}, {1,4}, {2,3}, {2,4}, 
//  {3,4}, {1,2,3}, {1,2,4}, {1,3,4}, {2,3,4}, {1,2,3,4}}


//creating a new Set to remove all the dulpicates 
//using the subset method that says 2**n-1;