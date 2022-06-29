"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z >= 1){
document.write("<p> z >= 1 </p>");
x = z-1;
}
else if(z < 1){
document.write("<p> z < 1 <p>");	
x = z*z+1;
} 
y = (Math.pow(e,Math.pow(Math.sin(x),3))+Math.log(x+1))/Math.sqrt(x);
document.write("<p>"+y+"</p>");