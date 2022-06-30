"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z > 0){
document.write("<p> z > 0 </p>");
x = Math.sqrt(z);
}
else if(z <= 0){
document.write("<p> z <= 0 <p>");	
x = (3*z*z-z)-5;
} 
y = Math.cos(5*x)+Math.sin(1/5*x)+Math.pow(e,x);
document.write("<p>"+y+"</p>");