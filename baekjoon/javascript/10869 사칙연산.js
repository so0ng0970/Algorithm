// node.js input
// const [a,b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = [7, 3];
const one = +a;
const two = +b;
value = `${one + two}\n${one - two}\n${one * two}\n${Math.floor(one / two)}\n${
  one % two
}`;
console.log(value);
