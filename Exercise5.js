Homework 5

Given four numbers. Find the minimum and maximum of four numbers.

Soultion 5

var a = 47;
var b = 14;
var c = 6;
var d = -9;
console.log("Max = " + Math.max(a,b,c,d));
console.log("Min = " + Math.min(a,b,c,d));

or

var a = 1;
var b = 7;
var c = 3;
var d = 12;
var max = null;
if (a > b && a > c && a > d) {
  max = a;
}
else if (b > a && b > c && b > d) {
  max = b;
}
else if (c > a && c > b && c > d){
  max = c;
}
else {
  max = d;
}
console.log(max + "is maximum");

or

console.log(a > b && a > c && a > d && a); /*սա, եթե &&-ից հետո ուղղակի մենակ a ենք գրում՝ ինքը այդ a-ն կտպի:*/
console.log(b > a && b > c && b > d && b);
console.log(c > a && c > b && c > d && c);
console.log(d > a && d > b && d > c && d);