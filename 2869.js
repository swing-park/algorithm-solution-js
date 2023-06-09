const [A, B, V] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");

console.log(Math.ceil((V - B) / (A - B)));
