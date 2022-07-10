"use strict";
const  n = 10;
let mas = [];
let i, j, k;
for(i = 0; i < n; ++i)
    mas[i] = prompt("Enter element");
 
k = prompt("Enter k");
function shift(mas,n,k){

for(i=0;i<k;i++) mas.unshift(mas.pop());
console.log(mas);

}



shift(mas,n,k);
document.write(mas);