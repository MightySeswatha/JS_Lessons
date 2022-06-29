"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
else if(3*Math.sqrt(a)-2/Math.sqrt(a) == 0 || a < 0){

}
else{
    z1 = Math.sqrt(Math.pow(3*a+2,2)-24*a)/(3*Math.sqrt(a)-2/Math.sqrt(a));
    z2 = -Math.sqrt(a);
	alert(z1);
	alert(z2);
}