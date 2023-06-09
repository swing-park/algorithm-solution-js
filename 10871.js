const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const max = Number(input[0].split(" ")[1]);
const A = input[1].split(" ").map((x) => Number(x));
const answer = A.filter((x) => max > x);

console.log(answer.join(" "));
