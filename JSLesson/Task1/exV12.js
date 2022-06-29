"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = (Math.sin(a)+Math.cos(2*b-a))/(Math.cos(a)-Math.sin(2*b-a));
z2 = (1+Math.sin(2*b))/(Math.cos(2*b));
alert(z1);
alert(z2);