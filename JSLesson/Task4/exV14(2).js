"use strict";
let N = Number(prompt("Enter number N:"));
if(isNaN(N) == true){
  System("Pause");
}
let arr = []
for(let i = 0; i < N; i++){
  arr[i] = Number(prompt("Enter Element("+i+")"));
}
document.write(arr + "<br>");
//Функция
function Popular(arr){
 let result = arr.reduce(function(acc, el) {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});
document.write('<pre>', JSON.stringify(
  result, null, 2), '</pre>'); 
}

Popular(arr);