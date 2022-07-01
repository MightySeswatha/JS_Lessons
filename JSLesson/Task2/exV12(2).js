"use strict";
let x,y,a,max,min,F;
const e = 2.71828182846;
const pi = 3.14159265359;
 x = Number(prompt("Enter x:"));
 y = Number(prompt("Enter y:"));
 a = Number(prompt("Enter a:"));
 if(isNaN(x) == true || isNaN(y) == true || isNaN(a) == true){
 document.write("<p> Not a Number </p>"); 
 System("Pause");
 }
 else{
maxmin();
if(a < 0){
  F = max+a;
}
else if(a == 0){
  F = min;
}
else{
  F = Math.sqrt(x*x+y*y)+Math.pow(e,(y-x));
}
document.write("<p> m:"+F+" </p>");
 }

function maxmin() {
if(Math.sqrt(x) < y){
  max = y;
}else{max = Math.sqrt(x);}
if(x < a){
  min = x;
}else {min = a;}
}