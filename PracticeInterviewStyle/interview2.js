// const str = 'My name is Deng'

//so here the interviewer want to know if there is a subString of ng in the string 
//we could return it if it is in the string 
//else we could say such dosnt exist if at all it dost exist in the string

function subStr(str){
    const sub = 'en';
    return str.indexOf(sub)
   
}
console.log(subStr('My name is Deng en'));

//so here there were 2 ways l could appraoch this
//first of all l could use an if statemnet like this 
// if(str.includes(sub)){
//     return true;
// }else {
//     return false
// }
//so here this would give me the true of false boolean expression if at all the strin included the substrin\
//tho the interviewer empahsised to return the index position of the substrin
//so we would return the index of substring from the array

//interviewer asks again what if we have another en infront or behind the first one
//so my solution would stay the same since the first sh postion would overrise the second one and if we log it then it would besically remian the same as 12
//and if the substring we wanted to find was after the en then we would use the lastIndexOf() to give us the last index of the en after it appears 
//	•	First occurrence → use indexOf(sub).
	// •	Last occurrence → use lastIndexOf(sub).
	// •	All occurrences → loop with indexOf(sub, fromIndex) until it returns -1.


    //again ok if we have more than one substring such as en then we need to return the count of times this appears such that it shoudl bring it as 2 times since it appears 2 times

    /* 
    i would create a count the increases everytime we see en then return the count as the final solution
    */
