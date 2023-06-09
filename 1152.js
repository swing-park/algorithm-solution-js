const input = require("fs").readFileSync("/dev/stdin").toString();

console.log(
  input
    .trim()
    .split(" ")
    .filter((x) => x !== "").length
);
