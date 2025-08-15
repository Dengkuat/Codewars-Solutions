// input: names - unsorted strings
// output: case-agnostic sort
function sortme(names){
   return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    }

  //?input
  //array of string characters unsorted

  //*info
  //sort the array of strings in aplhabet order case insesntive

  //!test cases
//   ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

//since it already iterated through then we will just use the localeComapre to compare the first and second strings
