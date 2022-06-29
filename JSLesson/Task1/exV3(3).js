"use strict";
let x,y,z,t;
const pi = 3.1415926;
const e = 2.718;
x = prompt("Vvedite x:");
y = prompt("Vvedite y:");
z = prompt("Enter z:");
if(isNaN(x) == true || isNaN(y) == true || isNaN(z)){
	
}
else if(Math.abs(x-(2*y)/(1+x*x*y*y)) == 0){

}
else{
	x = Number(x);
	y = Number(y);
	z = Number(z);
    t = (1+Math.pow(Math.sin(x+y),2))/(Math.abs(x-(2*y)/(1+x*x*y*y)))*Math.pow(x,Math.abs(y))+Math.pow(Math.cos(Math.atan(1/z)),2);
	alert(t);
}