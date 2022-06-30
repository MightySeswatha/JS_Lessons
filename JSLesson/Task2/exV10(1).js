"use strict";
let y,fx,z,a,x,c,d,b;
const e = 2.71828182846;
const pi = 3.14159265359;
z = Number(prompt("Enter z:"));
d = Number(prompt("Enter d:"));
c = Number(prompt("Enter c:"));
if(isNaN(d) == true || isNaN(z) == true || isNaN(c) == true){
  document.write("<p> Not a number </p>");
}else{
if(z < 1){
  document.write("<p> z < 1 </p>");
  x = Math.pow(z,2)+1;
}
else if (z >= 1){
  document.write("<p> z >= 1 </p>");
  x = z - 1;
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
if(Math.sqrt(x) == 0 || x < 0){
  System("Stop");
}
y = (d*fx*Math.pow(e,Math.pow(Math.sin(x),3))+c*Math.log(x+1))/(Math.sqrt(x));
document.write("<p> y:"+y+" </p>");
}