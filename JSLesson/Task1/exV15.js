"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = (Math.sqrt(2*a+2*Math.sqrt(a*a-4)))/(Math.sqrt(a*a-4)+a+2);
z2 = 1/(Math.sqrt(a+2));
alert(z1);
alert(z2);