"use strict";
let arr = [];
let x = prompt("Enter x:");
if(isNaN(x) == true){
  System("Pause");
}
for(let i = 0; i < x; i++){
  arr[i] = prompt("Enter element("+i+")");
}

function ex(x,arr){
for(let i = 0; i < x; i++){
  if(i%3 == 0 && i != 0){
    arr.splice(i,1);
  }
}
}
ex(x,arr);
document.write(arr);