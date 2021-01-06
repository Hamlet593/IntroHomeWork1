Homework 3

Declare a variable with defined value. Print the last digit of the number

Solution 3

var a = 55;
console.log(a % 10);

or

var a = -14;
if(a > 0){
  console.log(a % 10);
}
else{
  console.log(Math.abs(a % 10));
}

or

var a = -47;
if(a > 0){
  console.log(a % 10);
}
else{
  console.log(-(a % 10));
}