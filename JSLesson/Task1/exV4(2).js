"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
else if(1+Math.cos(4*a) == 0 || 1+Math.cos(2*a) == 0){

}
else{
    z1 = Math.sin(4*a)/(1+Math.cos(4*a))*Math.cos(2*a)/(1+Math.cos(2*a));
    z2 = 1/Math.tan(3/2*pi-a);
	alert(z1);
	alert(z2);
}