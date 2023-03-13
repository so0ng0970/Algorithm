const [a,b] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const num = b.split("").map(n=>+n);
 const plus = num.reduce((a,b) => (a+b));
 console.log(plus)