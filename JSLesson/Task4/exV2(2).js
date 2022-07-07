"use strict";
let N;
N = Number(prompt("Enter number N"));
if(isNaN(N) == true){
  System("Pause");
}
N = String(N);
function maxRecurringChar(N) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''
 
    for (let char of N) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
 
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
 
    return maxChar
}
let result = maxRecurringChar(N);
let arr = []
for(let i = 0; i < 5; i++){
  arr[i] = Math.pow(Number(result),i+1);
}
document.write("Наиболее часто встречаемое число:"+result+"<br>");
document.write(arr);