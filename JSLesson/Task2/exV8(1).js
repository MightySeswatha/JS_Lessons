"use strict";
let y,fx,z,a,x,c,d,b;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z:"));
a = Number(prompt("Enter a:"));
c = Number(prompt("Enter c:"));
if(isNaN(c) == true || isNaN(z) == true || isNaN(a) == true){
  document.write("<p> Not a number </p>");
}else{
if(z >= 0){
  document.write("<p> z >= 0 </p>");
  x = 2*z+1;
}
else if (z < 0){
  document.write("<p> z < 0 </p>");
  x = Math.log(z*z-z);
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
y = Math.pow(Math.sin(fx),2)+a*Math.pow(Math.cos(x*x*x),5)+c*Math.pow(Math.log(x),2/5.);
document.write("<p> y:"+y+" </p>");
}