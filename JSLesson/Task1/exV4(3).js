"use strict";
let x,y,z,t;
const pi = 3.1415926;
const e = 2.718;
x = prompt("Vvedite x:");
y = prompt("Vvedite y:");
z = prompt("Enter z:");
if(isNaN(x) == true || isNaN(y) == true || isNaN(z)){
	
}
/*else if(){

}*/
else{
	x = Number(x);
	y = Number(y);
	z = Number(z);
    t = Math.pow(Math.abs(Math.cos(x)-Math.cos(y)),(1+2*Math.pow(Math.sin(y),2)))*(1+z+(z*z)/2+Math.pow(z,3)/3+Math.pow(z,4)/4);
	alert(t);
}