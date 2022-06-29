"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
else if(Math.sqrt(a) < 0 || a+2 == 0 || a-Math.sqrt(2*a) == 0){

}
else{
	a = Number(a);
    z1 = ((a+2)/Math.sqrt(2*a)-a/(Math.sqrt(2*a)+2)+2/(a-Math.sqrt(2*a)))*(Math.sqrt(a)-Math.sqrt(2))/(a+2);
    z2 = 1/(Math.sqrt(a)+Math.sqrt(2));
	alert(z1);
	alert(z2);
}