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
document.write(arr);
let arrTemp = [];
for(let i = 0; i < arr.length-1; i++){
if(arr[i] < min){min = arr[i]; imin = i;}
if(arr[i] > max){max = arr[i]; imax = i;}
}
if(imin < imax){
  let i1 = 0;
  for(let i = imin+1; i <= imax; i++){
    arrTemp[i1] = arr[i];
    i1++;
  }
}
else if(imax < imin){
  let i2 = 0;
  for(let i = imax+1; i <= imin; i++){
    arrTemp[i2] = arr[i];
    i2++;
  }
}
arrTemp.sort((a, b) => a - b);
let i3 = 0;
for(let i = 0; i < arr.length-1; i++){
   if(i > imax && i <= imin){
    arr[i] = arrTemp[i3];
    alert(i3);
    i3++;
  }
  else if(i > imin && i <= imax){
    arr[i] = arrTemp[i3];
    i3++;
    }
}
console.log(arrTemp);
console.log(arr)