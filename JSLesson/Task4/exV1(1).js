"use strict";
let min,max,imin,imax;
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
console.log(arr);
for(let i = 0; i < arr.length-1; i++){
  if(arr[i] < min){min = arr[i]; imin = i;}
  if(arr[i] > max){max = arr[i]; imax = i;}
}


if(Math.abs(imax - imin) == 1){System("Pause");}
let arrTemp = [];
if(imin < imax){
  for(let i = 0; i < Math.abs(imax - imin)-1; i++){
    arrTemp[i] = arr[imin+i+1];
  }
}
if(imax < imin){
  for(let i = 0; i < Math.abs(imax - imin)-1; i++){
    arrTemp[i] = arr[imax+i+1];
  }
}
arrTemp.sort((a, b) => a - b);

let i1 = 0;
let count = 0;
for(let i = 0; i < arr.length-1; i++){
  if(i == imax && count == 0 || i == imin && count == 0){
  for(let i1 = 0; i1 < Math.abs(imax - imin)-1; i1++){
    arr[i] = arrTemp[i1];
    i++;
  }
  count++;
   }
 }


console.log(arrTemp);
console.log(arr);