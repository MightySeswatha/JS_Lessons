"use strict";
let x,y,z,max,min,max1,max2,m;
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
if(x < y && x < z){
  min = x;
} else if(y < x && y < z){
  min = y;
}else{
  min = z;
}
if(x < y){
  max1 = y;
}else{
  max1 = x;
}
if(y < z){
  max2 = z;
}else{
  max2 = y;
}
if(max1 < max2){
  max = max2;
}else{max = max1;}
}