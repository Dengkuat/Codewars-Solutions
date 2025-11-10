const reverse = str => {
  let newStr = [];
  str.split(' ').forEach((x, i) => i % 2 === 0?newStr.push(x):newStr.push(x.split('').reverse().join('')))
  return newStr.join(' ');
}
console.log(reverse("Reverse this string, please!"));

//?input
//so our input is going to be a string alright 
// a string of characters

//*info
//so we are suppoed to return the reverse of that word 
//we are only going to be reversing the strings at a position of an odd indexed number
//so the words in the odd numners shoudl be left the way they are 

//!test cases
//
// describe("Tests", () => {
//   it("should reverse every other word in the string", () => {
//     assert.strictEqual(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp");
//     assert.strictEqual(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts");
//   });
// });

//so what l can do about this?
//so becaue it is a string l will convert it into an array
//then using map to perform a tranformation on the string l want 