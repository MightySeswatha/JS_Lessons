"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = prompt("Enter a");
b = prompt("Enter b");
z1 = Math.pow(Math.cos(3/8*pi-b/4),2)-Math.pow(Math.cos(11/8*pi+b/4),2);
z2 = Math.sqrt(2)/2*Math.sin(b/2);
alert(z1);
alert(z2);