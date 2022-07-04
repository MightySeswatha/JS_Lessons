"use strict";
let sum,i1,i2;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let count = 0;
sum = 0;
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

for(let i = 0; i < arr.length-1; i++){
  if(arr[i] > 0 && count == 0){i1 = i; count++;}
  else if(arr[i] > 0){i2 = i;}
}

for(let i = i1+1; i < i2; i++){
  sum += Number(arr[i]);
}
document.write("<p>"+sum+"</p>");
console.log(i1);
console.log(i2);
console.log(arr);