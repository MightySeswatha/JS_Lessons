"use strict";
let sum = 0;
let count = 0;
let arr = []
let n = prompt("Enter length:");
if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
  if(arr[i] < 0){sum += arr[i]; count++;}
}
document.write("<p>"+sum/count+"</p><br>");
console.log(arr);