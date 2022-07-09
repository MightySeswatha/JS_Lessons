"use strict";
let arr = [];
let x = prompt("Enter x:");
if(isNaN(x) == true){
  System("Pause");
}
for(let i = 0; i < x; i++){
  arr[i] = prompt("Enter element("+i+")");
}

function uniq_fast(arr){
let seen = {};
let out = [];
let len = arr.length;
let j = 0;
for(let i = 0; i < len; i++){
  let item = arr[i];
  if(seen[item] != 1){
    seen[item] = 1;
    out[j++] = item;
  }
}  
return out;
}
uniq_fast(arr);
let out = uniq_fast(arr);
document.write(uniq_fast(out) + "<br>");

document.write(arr);