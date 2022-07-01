"use strict";
let x,y,z,max,min1,min2,m;
const e = 2.71828182846;
const pi = 3.14159265359;
 x = Number(prompt("Enter x:"));
 y = Number(prompt("Enter y:"));
 z = Number(prompt("Enter z:"));
 if(isNaN(x) == true || isNaN(y) == true || isNaN(z) == true){
 document.write("<p> Not a Number </p>"); 
 System("Pause");
 }
 else{
maxmin();
if(max == 0){System("Pause");}
else{
m = (min1+min2)/Math.pow(max,2);
document.write("<p> m:"+m+" </p>");
}

 }

function maxmin() {
if(y <= z && x <= z){
  max = z;
}
else if (z <= y && x <= y){
  max = y;
}
else{
  max = x;
}

if(x < y ){
  min1 = x;
}
else{
  min1 = y;
}

if(x < z){
  min2 = x;
} 
else 
  {
    min2 = z;
  }}