"use strict";
let y,fx,z,a,x,c,d,b,k,m,n;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z:"));
b = Number(prompt("Enter b:"));
a = Number(prompt("Enter a:"));
if(isNaN(a) == true || isNaN(z) == true || isNaN(b) == true){
  document.write("<p> Not a number </p>");
}else{
if(z > 0){
  document.write("<p> z > 0 </p>");
  x = Math.sqrt(z);
}
else if (z <= 1){
  document.write("<p> z <= 0 </p>");
  x = 3*z+1;
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
y = b*Math.cos(a*fx)+Math.sin(x/5)+a*Math.pow(e,x);
document.write("<p> y:"+y+" </p>");
}