const [num1, num2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

console.log(num1 * num2.split("")[2]);
console.log(num1 * num2.split("")[1]);
console.log(num1 * num2.split("")[0]);
console.log(num1 * num2);
