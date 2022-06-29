"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = Math.pow((Math.cos(a)-Math.cos(b)),2)-Math.pow((Math.sin(a)-Math.sin(b)),2);
z2 = (-4*Math.pow(Math.sin((a-b)/2),2))*Math.cos(a+b);
alert(z1);
alert(z2);