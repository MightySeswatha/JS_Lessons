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
let arr1 = [];
let arr2 = [];
let i1 = 0;
let i2 = 0;
let it = 0;
for(let i = 0; i < x; i++){
  if(arr[i] < 0){
    arr1[i1] = arr[i];
    i1++;
    it = i1;
  } else
  {arr2[i2] = arr[i];
    i2++;
  }
}
i2 =0;
for(let i = 0; i < x; i++){
  if(i < it){
    arr[i] = arr1[i];
  } else{
    arr[i] = arr2[i2];
    i2++;
  }

}

}
ex(x,arr);
document.write(arr);