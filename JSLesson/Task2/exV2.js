"use strict";
let y,x,a,b,z;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
a = Number(prompt("Enter a"));
b =Number(prompt("Enter a"));
if(z < a*b){
document.write("<p> z < a * b </p>");
x = Math.sqrt(a*a+a*a*z);
}
else if(z >= a*b){
document.write("<p> z >= a * b </p>");	
x = Math.pow(Math.sin(z),2)+Math.abs(a*b*z);
} 
y = (a*x+b*x*Math.cos(Math.sqrt(x)))/(x+a*b);
document.write("<p>"+y+"</p>");