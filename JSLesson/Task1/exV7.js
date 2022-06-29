"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = Number(prompt("Enter a"));
b = Number(prompt("Enter b"));
z1 = Math.pow(Math.cos(a),4)+Math.pow(Math.sin(b),2)+(1/4)*Math.pow(Math.sin(2*a),2)-1;
z2 = Math.sin(b+a)*Math.sin(b-a);
alert(z1);
alert(z2);