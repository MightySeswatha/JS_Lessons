"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z <= 0){
document.write("<p> z <= 0 </p>");
x = z*z+5;
}
else if(z > 0){
document.write("<p> z > 0 <p>");	
x = 1/(Math.sqrt(z-1));
} 
y = Math.pow(Math.sin(x*x-1),3)+Math.log(Math.abs(x))+Math.pow(e,x);
document.write("<p>"+y+"</p>");