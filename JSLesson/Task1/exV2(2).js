"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
else if((1-Math.sin(3*a-pi)) == 0){

}
else{
    z1 = (Math.sin(pi/2+3*a))/(1-Math.sin(3*a-pi));
	z2 = 1/Math.tan(5/4*pi+3/2*a);
	alert(z1);
	alert(z2);
}