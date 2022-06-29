"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = (1-2*Math.pow(Math.sin(a),2))/(1+Math.sin(2*a));
z2 = (1-Math.tan(a))/(1+Math.tan(a));
alert(z1);
alert(z2);