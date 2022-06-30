"use strict";
let y,x,z,k,m,n;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z"));
k = Number(prompt("Enter k"));
m = Number(prompt("Enter m"));
n = Number(prompt("Enter n"));
if(z > 1){
document.write("<p> z > 1 </p>");
x = Math.pow(e,z)+z;
}
else if(z <= 1){
document.write("<p> z <= 1 <p>");	
x = z*z+1;
} 
y = Math.sin(n*x)+Math.cos(k*x)+Math.log(m*x);
document.write("<p>"+y+"</p>");