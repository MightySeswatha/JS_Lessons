"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z < 0){
document.write("<p> z < 0 </p>");
x = z;
}
else if(z >= 0){
document.write("<p> z >= 0 </p>");	
x = Math.sin(z);
} 
y = 2/3*Math.pow(Math.sin(x),2)-3/4*Math.pow(Math.cos(x),2);
document.write("<p>"+y+"</p>");