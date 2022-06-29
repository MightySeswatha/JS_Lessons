"use strict";
let y,x,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
if(z < -1){
document.write("<p> z < -1 </p>");
x = -z/3;
}
else if(z >= -1){
document.write("<p> z >= -1 </p>");	
x = Math.abs(z);
} 
y = Math.log(x+0.5)+(Math.pow(e,x)-Math.pow(e,-x));
document.write("<p>"+y+"</p>");