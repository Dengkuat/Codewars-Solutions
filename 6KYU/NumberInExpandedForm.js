function expandedForm(num) {
    // Your code here
    return String(num)
    .split('')
    .map((n, i, arr) => n * 10 ** (arr.length - i - 1))
    .filter(n => n !== 0)
    .join(' + ');
  }

  funtion
  c
 console.log(String())
  //?input
  //a whole number 
  //positive number

  //*info
  //you are given a number that u will need to return it as a string in Expanded Form
  
  //? test cases
    //   12 --> "10 + 2"
    //   45 --> "40 + 5"
    // 70304 --> "70000 + 300 + 4"

  //!
  //covert the number to string
  //split('') the string 
  //iterate through each array value
  //multiply num[i] by 10 power the place value - Math.pow(10, placevalue)
  //filter out the zeros
  //then join them with the +
