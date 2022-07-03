"use strict";
let sum = 0;
let arr = []
let min = 9007199254740991;
let i1;
let n = prompt("Enter length:");
if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
  if(arr[i] < min){min = arr[i];i1 = i;}
}
while(i1 > 0){
  i1--;
  sum += arr[i1];
}
document.write("<p>"+sum+"</p><br>");
console.log(arr);