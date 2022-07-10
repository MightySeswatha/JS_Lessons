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
function sort(arr,N){
//Нахождение индексов
let i1,i2;
let count = 0;
for(let i = 0; i < N; i++){
if(arr[i] == 0 && count == 0){
i1 = i; count++;
}
else if(arr[i] == 0 && count > 0){
i2 = i;
}
}
//Перевернутый массив
let temp = [];
let i3 = 0;
for(let i = i1+1; i < i2; i++){
temp[i3] = arr[i];
i3++;
}
//Вставка перевернутого
temp = temp.reverse();
i3 = 0;
for(let i = i1+1;i < i2; i++){
  arr[i] = temp[i3];
  i3++;
}
return arr;
}

sort(arr,N);
document.write(arr);
