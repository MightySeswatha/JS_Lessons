"use strict";
let min,max,imin,imax,i1,i2;
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
  if(arr[i] < 0){i1 = i;}
}
for(let i =0; i < arr.length-1; i++){
  if(arr[i] < min){min = arr[i]; i2 = i;}
}
console.log(i1);
console.log(i2);

if(Number(i1) < Number(i2)){
  for(let i = 0; i < Math.abs(Number(i1-i2)); i++){
    sum += Math.abs(arr[Number(i1+i)]);
  }
}
else if (Number(i2) < Number(i1)){
    for(let i = 0; i < Math.abs(Number(i1-i2)); i++){
    sum += Math.abs(arr[Number(i2+i)]);
  }
}
document.write(sum);