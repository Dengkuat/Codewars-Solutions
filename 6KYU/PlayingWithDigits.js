function digPow(n, p){
    // ...
    const num = String(n).split('').map(Number);
    const power =  num.map((x, index) => x**(p+index));
    const sum =  power.reduce((x, y) => x+y)
    return sum%n===0? sum/n:-1;
  }

  //since p is already given then we will just raise each power to their index 
  // as l said to get this we will do this x**(p+index)
  //so now we check if the power divided by the p was our initial if it wasn then we returning -1
  //?input
  //a input of 2 positive integers n and p
  //fing the positive intgers k if it exists
  
  //*info
  // for K, the ppositive integers is the sum of the digits od n eaisd to the conscutive power starting from p is equal to *n
  //formula - 
  //if  k exist we will return it otherwise we will return -1 is it dosnt exist
  // n and p will always be +


  //!test cases
  //   89 --> 8¹ + 9² = 89 * 1
  // 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
  // 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//   n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//
// the patern flows for 2 digits its 1, 3 digits its 2 and for more its 3 - p varies so we need 2 comarisons
//so p adds in such a way [1,2] - 1**p+(index);
//we have 3 separate comparison in our loop right