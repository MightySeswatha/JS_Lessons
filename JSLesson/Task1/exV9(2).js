"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
else if(a-3 == 0 || Math.sqrt((a+3)/(a-3)) < 0 || Math.sqrt(a*a-9)<0 || (a*a-2*a-3+(a-1)*Math.sqrt(a*a-9)) == 0 ){

}
else{
	a = Number(a);
    z1 = (a*a+2*a-3+(a+1)*Math.sqrt(a*a-9))/(a*a-2*a-3+(a-1)*Math.sqrt(a*a-9));
    z2 = Math.sqrt((a+3)/(a-3));
	alert(z1);
	alert(z2);
}