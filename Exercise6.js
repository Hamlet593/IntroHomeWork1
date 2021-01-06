Homework 6

Given a number. Print “odd” if the number is odd and “even” if it’s even.

Solution 6

var a = 48;
if(a % 10 === 0){/*եթե բաժանվում է առանց մնացորդի, հետևաբար %-ով բաժանման դեպքում մնացորդը պետք է տա 0, */
  console.log("even");/*Պետք է չակերտների մեջ գրենք, որ ինքը չմտածի թե var-ից ինչ-որ ֆունկցիա է վերցնելու*/
}
else{
  console.log("odd");
}