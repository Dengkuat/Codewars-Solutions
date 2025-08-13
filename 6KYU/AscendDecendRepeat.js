function ascendDescend(length, minimum, maximum) {
    let arr1 = '';
    for(let i=minimum; i <= maximum; i++){
        arr1+=i;
    }
    for(let i=maximum -1; i>= minimum; i--){
        arr1+=i;
    }
    let result =  arr1.repeat(length);
    return result.substring(0, length);
}

  //?input
  //3 integers as input
  //the 3 include the length maximum and minimum

  //*info
  //soo we suposed to return a string 
  //starts from minimum
  //keeps increasing untill we reach the maximum 
  //the finally decends one more time untill we reach the minimum


  //!test cases
//   length: 5, minimum: 1, maximum: 3   ==>  "12321"
//   length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//   length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

//one thing is l am going to use while(condition) i++
//i will start from minmum and it has to not excede maximum