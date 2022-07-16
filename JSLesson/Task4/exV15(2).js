"use strict";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let arr = [];
let n = prompt("Enter length:");
let c = Number(prompt("1 - By Keyboard 2 - Random numbers"));
switch (c) {
  case 1:
    if(n > 20){System("Pause");}
for(let i = 0; i < n; i++){
  arr[i] = Number(prompt("Enter element("+i+"):"));
}
    break;
  case 2:
 for(let i = 0; i < n; i++){
  arr[i] = getRandomInt(200)-100;
}   
    break;
  default:
    alert( "Error" );
    System("Pause");
}

document.write(arr+"<br>");

let number = Number(prompt("Enter number:"));
arr.forEach((element) => {
 if(element == number){
  arr.splice(arr.indexOf(element), 1);
 }
 })

document.write(arr);
console.log(arr)