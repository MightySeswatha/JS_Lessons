"use strict";
let min,max,imin,imax,i1;
let count = 0;
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
for(let i = 0; i < arr.length; i++){
  if(arr[i] < 0 && count == 0 ){
count++;
if(i % 2 == 0){
sum -= Math.abs(arr[i]);
}
}
if(count != 0 && i % 2 == 0 ){
    sum += Math.abs(arr[i]);
}
}
document.write(sum);
console.log(arr);