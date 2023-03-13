const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let arr = [];
for(let i = 1; i <= input; i++ ) {
    arr.push(i);
}
console.log(arr.join('\n'));