"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z > 0){
document.write("<p> z > 0 </p>");
x = -3*z;
}
else if(z <= 0){
document.write("<p> z <= 0 <p>");	
x = z*z;
} 
y = x*(Math.sin(x)+Math.pow(e,-(x+3)));
document.write("<p>"+y+"</p>");