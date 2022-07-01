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
if(min == 0){System("Pause");}
else{
m = max/min;
document.write("<p> m:"+m+" </p>");
}

 }

function maxmin() {
if(y < z){
  max = z;
}else{max = y;}
if(x < y){
  min1 = x;
}else{min1 = y;}
if(y < z){
  min2 = y;
}else{min2 = z;}
if(min1 < min2){
  min = min1;
}else{min = min2;}
}