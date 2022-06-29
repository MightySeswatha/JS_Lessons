"use strict";
let z1,z2,a,b;
const pi = 3.1415926;
a = prompt("Enter a");
b = prompt("Enter b");
z1 = (Math.sin(2*a)+Math.sin(5*a)-Math.sin(3*a))/(Math.cos(a)+1-2*Math.pow(Math.sin(2*a),2));
z2 = 2*Math.sin(a);
alert(z1);
alert(z2);