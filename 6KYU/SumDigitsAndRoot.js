function digitalRoot(n) {
    // ...
    while(n>9){
        const arrNum = String(n).split('').map(Number);
        n =  arrNum.reduce((x, y) => x+y, 0);
    }
    return n;
  }



  //?input
  //a 2 digit integer

  //*info
  //reduce the sum into a single digit 
  //if its already one digit then we return in that way
  //the input will always be a non negative integer

  //!test cases
    //  16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//    493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//we turn it into array of integers then we split it 
//then we have an arrya of string integers 
//we convert each integers inside into a number
//using reduce to sum up each etter inside the array of integers
//using a loop that will keep doing that untill the digits are one intgers