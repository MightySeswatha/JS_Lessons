"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = prompt("Enter a");
b = prompt("Enter b");
z1 = Math.cos(a)+Math.cos(2*a)+Math.cos(6*a)+Math.cos(7*a);
z2 = 4*Math.cos(a/2)*Math.cos(5/2*a)*Math.cos(4*a);
alert(z1);
alert(z2);