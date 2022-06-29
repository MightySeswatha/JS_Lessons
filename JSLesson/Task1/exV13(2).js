"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
/*else if(){

}*/
else{
	a = Number(a);
	b = Number(b);
    z1 = Math.cos(a)+Math.sin(a)+Math.cos(3*a)+Math.sin(3*a);
    z2 = 2*Math.sqrt(2)*Math.cos(a)*Math.sin(pi/4+2*a);
	alert(z1);
	alert(z2);
}