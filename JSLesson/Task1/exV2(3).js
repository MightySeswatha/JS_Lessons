"use strict";
let x,y,z,t;
const pi = 3.1415926;
const e = 2.718;
x = prompt("Vvedite x:");
y = prompt("Vvedite y:");
z = prompt("Enter z:");
if(isNaN(x) == true || isNaN(y) == true || isNaN(z)){
	
}
else if( (x*x+y*y+2) == 0){

}
else{
	x = Number(x);
	y = Number(y);
	z = Number(z);
    t = (Math.pow(8+Math.pow(Math.abs(x-y),2)+1,1/3.))/(x*x+y*y+2)-Math.pow(e,Math.abs(x-y))*Math.pow(Math.pow(Math.tan(z),2)+1,x);
	alert(t);
}