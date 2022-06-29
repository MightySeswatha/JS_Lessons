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
    z1 = Math.pow(Math.cos(a)-Math.cos(b),2)-Math.pow(Math.sin(a)-Math.sin(b),2);
    z2 = -4*Math.pow(Math.sin((a-b)/2),2)*Math.cos(a+b);
	alert(z1);
	alert(z2);
}