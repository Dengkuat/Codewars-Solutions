function duplicateCount(text){
    //...
    text = text.toLowerCase().split('').sort();
    let count =[];
    const repeat =  text.map((char,index, array) => {
        if(char === array[index+1]) count.push(char);
    });
    const result = [...new Set(count)].length;
    return result;
  }

  //?input
  //an input string of alphabetic letter than can sometimes have repetitive letters
  //

  //*info
  //a function that returns the count of distninct case insentive characters 
  //this are the digits that repeat more than once in the input string
  //the input string case can be containing upper and lowercase letters maybe even numeric digits

  //!!test cases
//   "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//so they are case insective so we will change everything into lowerCase to handle this
//we going to filter out the elements that repeat twice or more then return the count of the final
//
//what if l created a new Set of the string so that it removes all the duplicates then compare the length with the revious one then return the length 
//turning them into arrays of characters or using a for loop to iterat through everything