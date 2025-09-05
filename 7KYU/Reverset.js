function reverseIt(data){
    if(typeof data === 'string'){
        return data.split('').reverse().join('');
    } else if(typeof data === 'number') {
        return Number(data.toString().split('').reverse().join(''));
    } 
    return data;
    }


//?input
//it could range from an array to a string 

//*info
//with a function, so that the data reveived in revered 
//if the data is anyother type then we return it as it is
//in our case if a number or a string is passed then we will return the reverse of it


//!testcases
// "Hello" -> "olleH"

// "314159" -> "951413"

// [1,2,3] -> [1,2,3]
