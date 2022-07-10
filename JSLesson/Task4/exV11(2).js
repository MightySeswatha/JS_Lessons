"use strict";
let N = Number(prompt("Enter number N:"));
if(isNaN(N) == true){
  System("Pause");
}
let arr = []
let SN = String(N);
//Функция
function sqr(SN,arr){
let l = SN.length;
for(let i = 0; i < l; i++){
  arr[i] = Math.pow(Number(SN[i]),2);
}
}
sqr(SN,arr);
console.log(arr);
document.write(arr);
