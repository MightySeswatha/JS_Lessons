"use strict";
let a,b,x,h,i,max,min;
const e = 2.71828182846;
h = Math.PI/10;
a = -0.3*Math.PI;
b = 1.3*Math.PI;
i = 0;
let y = [];
document.write("<p>Number X_Value Y_Value</p><br>");
for(let x = a; x <= b; x += h){
  y[i]  = Math.pow(e,x)*Math.sin(x);
  document.write("<p>"+Number(i+1)+"###"+x+"###"+y[i]+"</p><br>");
  i++;
}
min = y[0];
max = min;
for(i = 1; i < y.length; ++i){
  if(y[i] > max) max = y[i];
  if(y[i] < min) min = y[i];
}
document.write("<p> Max elemet: "+max+"</p><br>");
document.write("<p> Min elemet: "+min+"</p><br>");