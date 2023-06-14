const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(
  [...new Set(input.slice(1))]
    .sort()
    .sort((a, b) => a.length - b.length)
    .join("\n")
);
