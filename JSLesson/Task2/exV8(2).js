"use strict";
let x,y,z,max1,max2,m;
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
if(max2 == 0){System("Pause");}
else{
m = max1/max2;
document.write("<p> m:"+m+" </p>");
}

 }

function maxmin() {
if(x+y+z < x*y*z){
  max1 = x*y*z;
}
else{
  max1 = x+y+z;
}
if(x+y+z < x/(y*z)){
  max2 = x/(y*z);
}else{
  max2 = x+y+z;
}
}