"use strict";
let sum = 0;
let arr = []
let n = prompt("Enter length:");
if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
  sum += arr[i] - Math.trunc(arr[i]);
}
document.write("<p>"+sum+"</p><br>");
console.log(arr);