"use strict";
let a,b,x,h,i,n,k;
h = Number(prompt("Enter h:"));
a = Number(prompt("Enter a:"));
b = Number(prompt("Enter b:"));
n = Number(prompt("Enter n:"));
i = 0;
k = 1;
let y = [];
let s = [];
document.write("<p>Number Y_Value S_Value |Y-X|_Value</p><br>");
for(let x = a; x <= b; x += h){
  y[i]  = (1-x*x/2)*Math.cos(x)-x/2*Math.sin(x);
  s[i] = 1;
  while(k < n)
    {
      
   //   s[i] += Math.pow((-1),k)*Math.pow(x,2*k+1)/factorial(2*k+1);
        s[i] += Math.pow(-1,k)*(2*k*k+1)/factorial(2*k)*Math.pow(x,2*k);
      k++;
  }
  k = 1;
  document.write("<p>"+Number(i+1)+"###"+y[i]+"###"+s[i]+"###"+Math.abs(y[i]-s[i])+"</p><br>");
  i++;
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
