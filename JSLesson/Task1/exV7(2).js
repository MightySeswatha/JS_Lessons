"use strict";
let z1,z2,a,b,an,bn;
const pi = 3.1415926;
a = prompt("Enter value a");
b = prompt("Enter value b");
if(isNaN(a) == true || isNaN(b) == true){
	
}
else if((Math.sqrt(Math.pow(a,3)*b)+a*b+Math.pow(a,2)-a) == 0 || a == 0 || a < 0 || b < 0){

}
else{
    z1 = ((a-1)*Math.sqrt(a)-(b-1)*Math.sqrt(b))/(Math.sqrt(Math.pow(a,3)*b)+a*b+Math.pow(a,2)-a);
    z2 = (Math.sqrt(a)-Math.sqrt(b))/a;
	alert(z1);
	alert(z2);
}