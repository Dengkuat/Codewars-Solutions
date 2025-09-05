// input: names - unsorted strings
// output: case-agnostic sort

function sortme(names){
    
    // your code here
    const capsLock = [];
    names.forEach(x=>{
        if(x[0] === x[0].toUpperCase()){
            capsLock.push(x); 
        }
    });

    const lowered = names.map(x => x.toLowerCase());
    const sorted = lowered.sort();

    return sorted.map(x => {
        const match = capsLock.find(orig => orig.toLowerCase() === x);
        return match || x;
    });
}

  console.log(sortme(["Hello", "there", "I'm", "fine"]));

  
  //?input
  //array of alphabetic character

  //*info
  //sort the input which are case insentive as the pattern un the example

  //!test Cases
//   ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"]) -->  ["a", "B", "C", "d"]

//so seeing the pattern 
//the test cases are using the first letter of there names to sort the array possition alphabetically
//so l could only use the char[0] and sort each in the alphabetic order since they are case insecntive then we just turn all to lower case
