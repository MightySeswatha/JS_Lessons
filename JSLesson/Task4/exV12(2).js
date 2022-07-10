"use strict";
let N = Number(prompt("Enter number N:"));
if(isNaN(N) == true){
  System("Pause");
}
let arr = []
for(let i = 0; i < N; i++){
  arr[i] = Number(prompt("Enter Element("+i+")"));
}
console.log(arr);
//Функция
function count(arr,N){
let count = 0;
for(let i = 0; i < N; i++){
  let j;
  for(j = i + 1; j < N && arr[j] != arr[i]; ++j);
    count += j == N;
}
return count;
}
let res = count(arr,N);
document.write(res);
