"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = (Math.sin(pi/2+3*a))/(1-Math.sin(3*a-pi));
z2 = 1/Math.tan((5/4*pi+3/2*a));
alert(z1);
alert(z2);