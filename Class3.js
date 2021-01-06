Exercise 11

Ճշտել, թիվը բացասական է, թե դրական, և տալ համապատասխան արդյունք:

Solution 11

var a = -5;
if (a < 0) {
  console.log("yes")
}
else{
  console.log("no")
}

or

var a = 5;

var res = a > 0 ? "yes" : "no";

console.log(res);

or

var a = -7;
switch(a > 0){
  case true: /*case-ը իր արժեքը վերցնում է switch-ից ու սկսում ստուգել: Case-ին արժեք ենք տվել; */
    console.log("yes");
    break;
  default:
    console.log("no");
}