"use strict";
let a,b,x,h,i,n,k;
const e = 2.71828182846;
h = Number(prompt("Enter h:"));
a = Number(prompt("Enter a:"));
b = Number(prompt("Enter b:"));
n = Number(prompt("Enter n:"));
i = 0;
k = 0;
let y = [];
let s = [];
document.write("<p>Number Y_Value S_Value |Y-X|_Value</p><br>");
for(let x = a; x <= b; x += h){
  y[i]  = Math.sin(x);
  s[i] = 0;
  while(k < n)
    {
      
      s[i] += Math.pow((-1),k)*Math.pow(x,2*k+1)/factorial(2*k+1);
      k++;
  }
  k = 0;
  document.write("<p>"+Number(i+1)+"###"+y[i]+"###"+s[i]+"###"+Math.abs(y[i]-s[i])+"</p><br>");
  i++;
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
