// CountingDuplicates
function duplicateCount(text){
    //...
    text = text.toLowerCase().split('');
    // const uniqueText = [...new Set(text)];
    // return uniqueText.filter(char => text.split(char).length - 1 > 1).length 
    return text.map(char => {
        char.filter(char => !text.includes(char))
    })
  }
  console.log(duplicateCount("aA11"));

  //?input
  //a string of alphabets
  //alphbets are case insenstive - so theycan have both upper and lower cases 
  //containing only alhabets

  //*output
  //if a string is empty or undefined returning a 0
  //we will be ignoring the alhabet cases 
  //then returning the length of the reapeated character

  //!test cases
//   "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

  //
  //creating a new Set of unique values 
  //compare and filter out the ones that appear both sides 
  //then return its length