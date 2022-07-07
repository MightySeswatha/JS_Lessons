"use strict";
const  n = 10;
let mas = [];
let i, j, k;
for(i = 0; i < n; ++i)
    mas[i] = prompt("Enter element");
 
k = prompt("Enter k");
function shift(n,k){
let tmpMas = [];
for(i = 0; i < k; ++i)
    tmpMas[i] = mas[n - 1 - k];
for(i = n - 1; i > k; --i)
    mas[i] = mas[i - k];
for(i = 0; i < k; ++i)
    mas[i] = tmpMas[i];
}
shift(n,k);
document.write(mas);