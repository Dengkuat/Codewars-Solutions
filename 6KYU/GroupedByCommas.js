//toLocaleString a number methd in js that returns a language senstive string represenation of a number
const groupByCommas = n => n.toLocaleString();


//?input
//we have an integer
//ranges from 0 <= n <= 2147483647

//*info
//we have to finish a solution that takes an input 
//and returns the string that is in decimal representation
//the numbers are grouped by commas for every 3 digits

//!test cases
// 1  ->           "1"
// 10  ->          "10"
// 100  ->         "100"
// 1000  ->       "1,000"
// 10000  ->      "10,000"
// 100000  ->     "100,000"
// 1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"