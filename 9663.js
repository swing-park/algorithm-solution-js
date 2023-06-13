const N = require("fs").readFileSync("/dev/stdin") * 1;

const arr = new Array(N).fill(0);
let answer = 0;

const isValid = (col) => {
  for (let i = 0; i < col; i++) {
    if (arr[col] === arr[i] || col - i === Math.abs(arr[col] - arr[i]))
      return false;
  }
  return true;
};

const setQueen = (col) => {
  if (col == N) {
    answer++;
    return;
  }

  for (let i = 0; i < N; i++) {
    arr[col] = i;
    if (isValid(col)) setQueen(col + 1);
  }
};

setQueen(0);
console.log(answer);
