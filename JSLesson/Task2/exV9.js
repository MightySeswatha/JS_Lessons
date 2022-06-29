"use strict";
let y,x,z,b;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
b = Number(prompt("Enter b"));
if(z <= 0){
document.write("<p> z <= 0 </p>");
x = Math.pow(z,b)+Math.abs(b/2);
}
else if(z > 0){
document.write("<p> z > 0 </p>");	
x = Math.sqrt(z);
} 
y = 1/Math.cos(x)+Math.log(Math.abs(Math.tan(x/2)));
document.write("<p>"+y+"</p>");