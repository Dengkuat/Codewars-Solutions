const predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => {
    const ages = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(ages.map(age => age*age).reduce((x, y) => x+y))/2);
  }
  console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

  //?input
  //so we taking a list of elements thoes are ages
  //so we are taking a list of ages for when all the grant pas died

  //*info
  //so with that information then we will take all thoes ages and multiply it by itslef 
  //so after multiplying all by there self then we add them all together
  //take the square root of the result and divide by 2

  //!test cases
  // predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

  //!Note
  //the result should be rounded of to the nearest integer
  //Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

  //so my thought
  //l will first of all just multiply the integer by them selfs
  //l created an array of all the ages so we could use array methods on them
  //map to have a transformation on each of the value
  //the using reduce to create an addtion of a single value of all of them
  //math.sqrt() to find the square root of the sum
  //so finally we will rounf off using math.round() and return that solution