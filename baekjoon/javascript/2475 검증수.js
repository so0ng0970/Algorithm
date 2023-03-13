const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(n=>+n);
let arr = []
for(let i = 0; i<input.length ; i++){
arr.push(Math.pow(input[i],2));
}
const a = arr.reduce((a,b) => (a+b));
console.log(a%10);