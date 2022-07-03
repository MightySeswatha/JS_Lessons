"use strict";
let sum = 0;
let arr = []
let i1;
let max = -9007199254740991;
let n = prompt("Enter length:");
if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
  if(arr[i] > max){max = arr[i]; i1 = i;}
}
while(i1 > 0){
  if(arr[i1] > 0){
    sum += arr[i1];
  }
  i1--;
}
document.write("<p>"+sum+"</p><br>");
console.log(arr);