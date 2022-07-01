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
  F = min+a;
}
else if(a == 0){
  F = max;
}
else{
  F = Math.abs(x-y)+y*(x+Math.pow(a,3/2.));
}
document.write("<p> m:"+F+" </p>");
 }

function maxmin() {
if(x*x < y*y){
  min = x*x;
}else{min = y*y;}
if(y < x && a < x){
  max = x;
}else if(x < y && a < y){
  max = y;
}else{max = a;}

}