"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z < 1){
document.write("<p> z < 1 </p>");
x = Math.pow(z,3)+0.2;
}
else if(z >= 1){
document.write("<p> z >= 1 </p>");	
x = z+Math.log(z);
} 
y = Math.pow(Math.cos(x*x),3)+Math.pow(Math.sin(Math.pow(x,3)),2);
document.write("<p>"+y+"</p>");