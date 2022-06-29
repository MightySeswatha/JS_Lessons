"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = (Math.sqrt(Math.pow((3*a+2),2)-24*a))/(3*Math.sqrt(a)-(2/Math.sqrt(a)));
z2 = -Math.sqrt(a);
alert(z1);
alert(z2);