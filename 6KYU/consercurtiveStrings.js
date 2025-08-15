function longestConsec(strarr, k) {
    // your code
    if ((strarr.length === 0) || (k > strarr.length) ||  (k <= 0)){
        return '';
    }

    let result = [];
     strarr.map((x,i,arr) => {
       if(i !== arr.length-1){
        result.push(arr.slice(i, i+2).join(''));
       }
    });
    const lengthh = Math.max(...result.map(x => x.length))
    console.log(lengthh);
    return result.find(w => w.length === lengthh);
}


//?input
// we given an array list of strings and integer k as out inputs

//*info
//we supposed to return the first longest string consisting of k consecutive strings taken in an array
//n is the length of string 
//if n = 0 or k > n or k <= 0 return ''
//consecutive strings : follow one after another without an interruption

//!test cases
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

//
// iterate through this all then arr.push(i.slice(0, (i.length+1) + [i+1].slice(i));
//result.push(i + [i+1]);

