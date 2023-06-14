const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => Number(v));

const max = Math.max(...input);
const arr = new Array(max + 1).fill(0);

input.forEach((v, i) => {
  arr[i]++;
});

arr.forEach((v, i) => {
  if (v) {
    arr[i].forEach((x) => console.log(x));
  }
});

//
