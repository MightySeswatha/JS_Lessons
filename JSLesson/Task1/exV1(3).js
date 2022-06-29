"use strict";
let x,y,z,t;
const pi = 3.1415926;
x = prompt("Vvedite x:");
y = prompt("Vvedite y:");
z = prompt("Enter z:");
if(isNaN(x) == true || isNaN(y) == true || isNaN(z)){
	
}
else if((1/2+Math.pow(Math.sin(y),2)) == 0 || (3-Math.pow(z,2)/5) == 0){

}
else{
	x = Number(x);
	y = Number(y);
	z = Number(z);
	t = (2*Math.cos(x-pi/6))/(1/2+Math.pow(Math.sin(y),2))*(1+(z*z)/(3-Math.pow(z,2)/5));
	alert(t);
}