"use strict";
let arr1 = [];
let arr2 = [];
let N = Number(prompt("Enter N:"));
if(isNaN(N) == true){
  System("Pause");
}
for(let i = 0; i < N; i++){
  arr1[i] = prompt("Enter element("+i+")");
}
for(let i = 0; i < N; i++){
  arr2[i] = prompt("Enter element("+i+")");
}
console.log(arr1);
console.log(arr2);
//Функция сортировки
function sort(arr1,arr2){
let min = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < N; i++){
  for(let i1 = 0; i1 < N; i1++){
  if(arr1[i] != arr2[i1] && arr1[i] <= min){
    min = arr1[i];
  } else{break;}
  }
}
return min;

}

let min = sort(arr1,arr2);
document.write(min);