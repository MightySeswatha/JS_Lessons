"use strict";
let x,y,max,min,F;
const e = 2.71828182846;
const pi = 3.14159265359;
 x = Number(prompt("Enter x:"));
 y = Number(prompt("Enter y:"));
 if(isNaN(x) == true || isNaN(y) == true){
 document.write("<p> Not a Number </p>"); 
 System("Pause");
 }
 else{
maxmin();
if(x > 0 && y >= 0){
  F = max;
}
else if(x < 0){
  F = min+Math.pow(Math.sin(x),2)-Math.cos(y*y);
}
else {
F = 1/2*x+Math.pow(e,y);
}
document.write("<p> m:"+F+" </p>");
 }

function maxmin() {
if(x < y + Math.sqrt(x)){
  max = y + Math.sqrt(x);
}else{max = x;}
if(x < y){
  min = x;
}else{
  min = y;
}
}