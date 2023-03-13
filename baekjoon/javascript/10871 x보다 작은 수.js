// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
// const a = input[0].split(" ").map(n=>+n)
// const b = input[1].split(" ").map(n=>+n)

// let arr = [];
// for(let i = 0; i<a[0]; i++){
 
//     if(b[i]<a[1]){
//        arr.push(b[i])
//     }
   

// } console.log(arr.join(" "))

// 더 간결한 코드 

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(n=>Math.pow(+n,2));
const a = input.reduce((a,b) => (a+b));
console.log(a%10);
