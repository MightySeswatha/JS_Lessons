"use strict";
let N;
N = Number(prompt("Enter number N"));
if(isNaN(N) == true){
  System("Pause");
}
N = String(N);
function ex(N){
let l = N.length;
let arr = [];
let i1 = 0;
for(let i = 0; i < N.length; i++){
if(Number(N[i])%3 == 0 && Number(N[i]) != 0){
  arr[i1] = Number(N[i]);
  i1++;
}
}
return arr;
}
console.log(ex(N));