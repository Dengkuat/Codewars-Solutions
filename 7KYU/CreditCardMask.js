const maskify = cc =>  cc.length <= 4? cc: [cc.split('').slice(0, cc.length-4).join('').replace(/./g, '#'), cc.split('').slice(cc.length-4).join('')].join('');

//?input
//we are given a long input of digitis 
//in other words a string of digits to a your credit card

//*info
//so we are tasked to write a function that changes all the last four character to #

//!test cases
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

//steps
//so l since this is a string alright
//l will have to replace all the other digits appart from the last four digits
//so how l could do that is that l could split the string untill we are left with the last four 
//something like length of string - 4 then the rest will all be replaced with #
//string.length - 4;so then starting from the first index untill the length we want to split the thing
//so l could use the slice method so l will slice from the first index to the one we will want it to stop at
//the convert thoes to # and join them back to the other before we split

