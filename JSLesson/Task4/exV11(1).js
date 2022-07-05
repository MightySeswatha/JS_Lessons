"use strict";
let min,max,imin,imax,i1;
let sum = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
max = Number.MIN_SAFE_INTEGER;
min = Number.MAX_SAFE_INTEGER;
let arr = [];
let n = prompt("Enter length:");
let c = Number(prompt("1 - By Keyboard 2 - Random numbers"));
switch (c) {
  case 1:
    if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
}
    break;
  case 2:
 for(let i = 0; i < n; i++){
  arr[i] = getRandomInt(200)-100;
}   
    break;
  default:
    alert( "Error" );
    System("Pause");
}
document.write(arr+"<br>");

for(let i = 0; i < arr.length-1; i++){
  if(arr[i] == 0){i1 = i;}
}
for(let i = 0; i < arr.length-1; i++){
  if(arr[i] > max){max = arr[i]; imax = i;}
}
if(i1 < imax){
for(let i = 0; i < Math.abs(i1-imax); i++){
  sum += arr[i1+i];
}
}
else if(imax < i1){
for(let i = 0; i < Math.abs(i1-imax); i++){
  sum += arr[imax+i];
}}
document.write(sum);
console.log(arr);