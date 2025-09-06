// const str = 'My name is Deng'

//so here the interviewer want to know if there is a subString of ng in the string 
//we could return it if it is in the string 
//else we could say such dosnt exist if at all it dost exist in the string

function subStr(str){
    const sub = 'en';
    return str.indexOf(sub)
   
}
console.log(subStr('My name is Deng'));

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