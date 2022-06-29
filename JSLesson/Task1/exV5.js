"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = prompt("Enter a");
b = prompt("Enter b");
z1 = 1-1/4*Math.pow(Math.sin(2*a),2)+Math.cos(2*a);
z2 = Math.pow(Math.cos(a),2)+Math.pow(Math.cos(a),4);
alert(z1);
alert(z2);