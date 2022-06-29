"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
else if(sqrt(a+2) < 0 || (Math.sqrt(a*a-4)+a+2) == 0 || Math.sqrt(a*a-4) < 0 || (Math.sqrt(2*a+2*Math.sqrt(Math.pow(a,2)-4))) < 0){

}
else{
	a = Number(a);
    z1 = (Math.sqrt(2*a+2*Math.sqrt(Math.pow(a,2)-4)))/(Math.sqrt(a*a-4)+a+2);
    z2 = 1/(Math.sqrt(a+2));
	alert(z1);
	alert(z2);
}