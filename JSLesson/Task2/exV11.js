"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z > 0){
document.write("<p> z > 0 </p>");
x = 1/(z*z+2*z);
}
else if(z <= 0){
document.write("<p> z <= 0 <p>");	
x = 1-Math.pow(z,3);
} 
y = (Math.pow(2*e,-3*x)-4*x*x)/(Math.log(Math.abs(x))+x);
document.write("<p>"+y+"</p>");