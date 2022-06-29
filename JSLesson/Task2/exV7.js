"use strict";
let y,x,z,c,d,k;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
c = Number(prompt("Enter c"));
d = Number(prompt("Enter d"));
k = Number(prompt("Enter k"));
if(z < 0){
document.write("<p> z < 0 </p>");
x = z*z-z;
}
else if(z >= 0){
document.write("<p> z >= 0 </p>");	
x = Math.pow(z,3);
} 
y = Math.pow(Math.sin(c*x+d*d+k*x*x),3);
document.write("<p>"+y+"</p>");