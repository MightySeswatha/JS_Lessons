"use strict";
let sum = 0;
let arr = []
let count = 0;
let i1 = 0;
let n = prompt("Enter length:");
if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
  if(arr[i] < 0 && count == 0){
    count++;
    i1 = i;
  }
}
while(i1 < arr.length-1){
  i1++;
  sum += Math.abs(arr[i1]);
  
}
document.write("<p>"+sum+"</p><br>");
console.log(arr);