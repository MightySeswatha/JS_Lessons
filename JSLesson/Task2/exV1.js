"use strict";
let y,x,k,z;
const e = 2.71828182846;
const pi = 3.14159265359;
k = Number(prompt("Enter k"));
z = Number(prompt("Enter z"));
if(k < 1){
document.write("<p> k<1 </p>");
x = k*Math.pow(z,3);
}
else if(k >= 1){
document.write("<p> k>=1 </p>");	
x = z*(z+1);
} 
y = Math.pow(Math.log(1+x*x)+Math.cos(x+1),Math.pow(e,k*x));
document.write("<p>"+y+"</p>");