"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = ((a-1)*Math.sqrt(a)-(b-1)*Math.sqrt(b))/(Math.sqrt(Math.pow(a,3)*b)+a*b+a*a-a);
z2 = (Math.sqrt(a)-Math.sqrt(b))/a
alert(z1);
alert(z2);