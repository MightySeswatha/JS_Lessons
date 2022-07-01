"use strict";
let x,y,z,min1,min2,m;
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
if(min2 == 0){System("Pause");}
else{
m = min1/min2;
document.write("<p> m:"+m+" </p>");
}

 }

function maxmin() {
if(x+y+z <= x*y*z){
  min1 = x+y+z;
}
else{
  min1 = x*y*z;
}
if(x-y+z <= x*(y/z)){
  min2 = x-y+z;
}
else{
  min2 = x*(y/z);
}

}