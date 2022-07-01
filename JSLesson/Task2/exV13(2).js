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
if(Math.abs(x)+Math.abs(y) <= 1 || x >= 0){
  F = max + Math.sqrt(x);
}
else if(Math.abs(x)+Math.abs(y) > 0 || x < 0 && y < 0){
  F = min+Math.pow(Math.sin(x),2)-Math.cos(y*y);
}
else {
F = Math.pow(e,x*x+Math.abs(y));
}
document.write("<p> m:"+F+" </p>");
 }

function maxmin() {
if(x < y){
  max = y;
  min = x;
}else{
  max = x;
  min = y;
}
}