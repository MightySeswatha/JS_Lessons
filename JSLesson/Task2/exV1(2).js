"use strict";
let x,y,z,max,min,m;
const e = 2.71828182846;
const pi = 3.14159265359;
 max = 0;
 min = 0;
 x = Number(prompt("Enter x:"));
 y = Number(prompt("Enter y:"));
 z = Number(prompt("Enter z:"));
 if(isNaN(x) == true || isNaN(y) == true || isNaN(z) == true){
 document.write("<p> Not a Number </p>"); 
 System("Pause");
 }
 else{
maxmin();
if(min == 0){System("Pause");}
else{
m = max/min+5;
document.write("<p> y:"+m+" </p>");
}

 }

function maxmin() {
  if(x <= y && z <= y){
     max = y;
  }
  else if(y <= x && y <= z){
     max = x;
  }
  else if(z <= x && z <= y){
     max = z;
  }
  if(x < y ){
     min = x;
  }
  else if(y < x ){
     min = y;
  }
}




