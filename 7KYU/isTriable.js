function isTriangle(a,b,c)
{
   const sortTriangle = [...new Set([a,b,c])];
   return sortTriangle.length < 3?'true':false;
}
console.log(isTriangle(1,2,2));
console.log(isTriangle(4,2,3));
