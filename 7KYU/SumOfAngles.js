const angle = n => 180*(n-2);
  

  //?input
  //so we a single paramter
  //this is a number

  //*info
  //so we are finding the total sum of internal angles in degree in an n-sided simple plygon
  //n will always be greater than 2

  //!test cases
//   describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(angle(3), 180);
//       assert.strictEqual(angle(4), 360);
//     });
//   })

//sol
//so each side im a polygon is 60 degrees 
//the output now depends on n and n is our input sides

//so to get the sum we use the method 180(n-2) where our n is the input