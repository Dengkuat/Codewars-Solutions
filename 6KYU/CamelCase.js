String.prototype.camelCase=function(){
  return this.split(' ').map(x => x.slice(0, 1).toUpperCase() + x.slice(1)).join('');
}

//?input
//so we have a string that is in another case type 

//*info
//so with a function we are supposed to convert the string into camel case that is ll that words must first have a capital and spaces removed 

//!test case
//"hello case" --> "HelloCase"
//"camel case word" --> "CamelCaseWord"

//what must l do
//alright since it is a string we shall change that to an array of string values
//then we will captalise every first letter in the begiining of every string
//so we will remove the spaces by joining that string all together tunnig them back to a string of camelcases
