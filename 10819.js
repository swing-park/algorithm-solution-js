let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
input = input[1].split(" ").map(Number);

const check = new Array(N).fill(false);
const newArr = [];
let max = 0;

const cal = (arr) => {
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};

const dfs = (depth) => {
  for (let i = 0; i < N; i++) {
    // depth가 6일때 max값 구하기
    if (depth === N) {
      max = Math.max(max, cal(newArr));
    }

    // [false,false,false,false,false,false]
    if (!check[i]) {
      // [true,f,f,f,f,f];
      check[i] = true;
      // [20];
      newArr.push(input[i]);
      console.log(newArr);
      dfs(depth + 1);
      // [f,f,f,f,f,f];
      check[i] = false;
      // []
      newArr.pop();
    }
  }
};

dfs(0);
console.log(max);
