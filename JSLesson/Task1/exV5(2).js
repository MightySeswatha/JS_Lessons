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
    z1 = (Math.sin(a)+Math.cos(2*b-a))/(Math.cos(a)-Math.sin(2*b-a));
    z2 = (1+Math.sin(2*b))/Math.cos(2*b);
	alert(z1);
	alert(z2);
}