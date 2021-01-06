Homework 1

Declare 2 variables a and b, such that a > b, and define values for them. Output their
 sum 
 difference (between a and b)
 product 
 quotient (between a and b)
 remainder (between a and b) 

Solution 1

var a = 7;
var b = 2;
if (a > b){
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a % b);
  console.log(a / b);
  console.log((a - (a % b)) / b);
}
else{
  console.log("false");
}