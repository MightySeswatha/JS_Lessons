"use strict";
let y,fx,z,a,x,b;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z:"));
a = Number(prompt("Enter a:"));
b = Number(prompt("Enter b:"));
if(isNaN(a) == true || isNaN(z) == true || isNaN(b) == true){
  document.write("<p> Not a number </p>");
}else{
if(z < 1){
  document.write("<p> z < 1 </p>");
  x = 2+z;
}
else if (z >= 1){
  document.write("<p> z >= 1 </p>");
  x = Math.pow(Math.sin(z),2);
} else{
  System("Stop");
}
fx = Number(prompt("Choose fx: 1) f(x)=2x 2) f(x)=x^2 3) f(x)=x/3"));
switch (fx) {
  case 1:
    document.write("<p> f(x)=2x; </p>");
    fx = 2*x;
    break;
  case 2:
   document.write("<p> f(x)=x^2; </p>");
    fx = Math.pow(x,2);
    break;
  case 3:
   document.write("<p> f(x)=x/3 </p>");
   fx = x/3;
    break;
  default:
    alert( "Error" );
    System("Stop");
}
y = (2*a*fx+b*Math.cos(Math.sqrt(Math.abs(x))))/(Math.pow(x,2)+5);
document.write("<p> y:"+y+" </p>");
}