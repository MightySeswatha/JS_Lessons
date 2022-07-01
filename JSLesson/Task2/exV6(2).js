"use strict";
let x,y,z,max,min,min1,min2,m;
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
m = min/max;
document.write("<p> m:"+m+" </p>");
}

 }

function maxmin() {
if(y < z){
  min = y;
}
else {min = z;}
if(x < y){
  min1 = x;
}
if(min < min1){
  max = min1;
}else{
  max = min;
}}