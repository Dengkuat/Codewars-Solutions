function likes(names) {
    if (names.length === 0) {
      return "no one likes this";
    } else if (names.length === 1) {
      return `${names[0]} likes this`;
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }

  //?input
  //an array that contains names of people who like am item

  //*info
  //it muist return teh test as shown in the test cases

  //!test cases
  //[]                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//
// using the template literals new es6 features
// where we can allow mulitple string, function, expressions and etc