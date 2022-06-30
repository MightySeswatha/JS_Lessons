"use strict";
let x,y,z,max,min,max1,max2,m;
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
if(max == 0){System("Pause");}
else{
m = min/max;
document.write("<p> m:"+m+" </p>");
}

 }

function maxmin() {
if(y < z){
  max = z;
}
else{
  max =y;
}
if(x < y ){
  max1 = y;
}
else{
  max1 = y;
}
if(y < z){
  max2 = z;
}
else {max2 = y}
if(max1 > max2){
  min = max2;
}else {min = max1}
}




