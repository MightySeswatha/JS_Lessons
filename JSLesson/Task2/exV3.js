"use strict";
let y,x,b,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
b =Number(prompt("Enter b"));
if(z < 1){
document.write("<p> z < 1 </p>");
x = z/b;
}
else if(z >= 1){
document.write("<p> z >= 1 </p>");	
x = Math.sqrt(Math.pow(z*b,3));
} 
y = -pi+Math.pow(Math.cos(x*x*x),2)+Math.pow(Math.sin(x*x),3);
document.write("<p>"+y+"</p>");