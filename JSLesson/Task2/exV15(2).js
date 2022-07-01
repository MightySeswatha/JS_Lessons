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
if(5 - 2*x == 0){
   System("Pause");
}
maxmin();
if(x <= 0){
  F = min;
}
else if(x >= 0 && y > 0){
  F = (2*Math.cos(x-pi/6)+Math.pow(y,1/3.))/(5-2*x);
}
else {
F = max;
}
document.write("<p> m:"+F+" </p>");
 }

function maxmin() {
if(0,9*y < Math.pow(e,2*x-3)){
  min = 0,9*y;
}else{min =Math.pow(e,2*x-3);}
if(Math.pow(Math.sin(y),2) > Math.pow(Math.cos(y),2)){
  max = Math.pow(Math.sin(y),2);
}else{max = Math.pow(Math.cos(y),2);}
}