"use strict";
let sum = 0;
let arr = []
let last = 0;
let n = prompt("Enter length:");
if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
  if(arr[i] < 0){last = i;}
}
while(last < n-1){
  last++;
  sum += Math.trunc(arr[last]);
}
document.write("<p>"+sum+"</p><br>");
console.log(arr);