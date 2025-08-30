function incrementString (strng) {
    // return incrementedString
   
  }
  console.log(incrementString('foo'))
  console.log(incrementString('foo23'))
  console.log(incrementString('foo9'))

  //?input
  //a string of alphabetic characters 
  //The string can include numbers at the end aswell

  //*info
  //so the function should increament the string
  //if the string already end with a number then the number should be increamented by 1
  //if the string dosnt end with a number then we will just append a new string which is one
  //the return should be a new string

  //!test cases
//   Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

//we will first check if the string already has a number as its end if it dosnt then we will easily appendd a string 1 at the end
//if it dosnt have then we will
//we will separate the string from the number then we will add it separetly then join it back and return it as a string
