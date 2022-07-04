"use strict";
let a,b,x,h,i,k,esp;
const e = 2.71828182846;
h = Number(prompt("Enter h:"));
a = Number(prompt("Enter a:"));
b = Number(prompt("Enter b:"));
esp = Number(prompt("Enter esp:"));
i = 0;
k = 0;
let y = [];
let s = [];
document.write("<p>Number Y_Value S_Value |Y-X|_Value</p><br>");
for(let x = a; x <= b; x += h){
  y[i] = FunY(x);
  s[i] = 0;
  while(Math.abs(y[i]-s[i]) >= esp)
    {
      
      s[i] += FunS(x,k);
      k++;
  }
  k = 0;
  document.write("<p>"+Number(i+1)+"###"+y[i]+"###"+s[i]+"###"+Math.abs(y[i]-s[i])+"</p><br>");
  i++;
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

  function FunY(x){
   return Math.sin(x);
}

function FunS(x,k){
  return Math.pow((-1),k)*Math.pow(x,2*k+1)/factorial(2*k+1);
}