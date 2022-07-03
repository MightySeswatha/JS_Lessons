"use strict";
let dif = 1;
let arr = []
let i1;
let max = -9007199254740991;
let n = prompt("Enter length:");
if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
  if(arr[i] > max){max = arr[i]; i1 = i;}
}
while(i1 < n-1){
  i1++;
  dif *= arr[i1];
}
document.write("<p>"+dif+"</p><br>");
console.log(arr);