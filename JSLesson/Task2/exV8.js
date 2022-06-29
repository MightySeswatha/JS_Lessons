"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z >= 0){
document.write("<p> z >= 0 </p>");
x = 2*z+1;
}
else if(z < 0){
document.write("<p> z < 0 </p>");	
x = Math.log(z*z-z);
} 
y = Math.pow(Math.sin(x),2)+Math.pow(Math.cos(x*x*x),5)+Math.log(Math.pow(x,2/5));
document.write("<p>"+y+"</p>");