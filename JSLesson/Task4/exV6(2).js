"use strict";
let arr1 = [];
let arr2 = [];
let arr = [];
let x1 = Number(prompt("Enter x1:"));
let x2 = Number(prompt("Enter x2:"));
if(isNaN(x1) == true || isNaN(x2) == true){
  System("Pause");
}
for(let i = 0; i < x1; i++){
  arr1[i] = prompt("Enter element("+i+")");
}
for(let i = 0; i < x2; i++){
  arr2[i] = prompt("Enter element("+i+")");
}
//Упорядочить массивы по неубыванию
for(let i = 1; i < x1; i++){
  if(arr1[i-1] <= arr1[i]){
  } else{
    let temp = arr1[i]
    arr1[i] = arr1[i-1];
    arr1[i-1] = temp;
  }
}

for(let i = 1; i < x2; i++){
  if(arr2[i-1] <= arr2[i]){
  } else{
    let temp = arr2[i]
    arr2[i] = arr2[i-1];
    arr2[i-1] = temp;
  }
}
console.log(arr1);
console.log(arr2);
//Функция сортировки
function sort(arr1,arr2){
  let i1 = 0;
for(let i = 0; i < x1+x2; i++){
  if(i < x1){arr[i] = arr1[i];}
  else if(i >= x1){arr[i] = arr2[i1];i1++;}
}

for(let i = 1; i < x1+x2; i++){
  if(arr[i-1] <= arr[i]){
  } else{
    let temp = arr[i]
    arr[i] = arr[i-1];
    arr[i-1] = temp;
  }
}

console.log(arr);
}
sort(arr1,arr2);
document.write(arr);