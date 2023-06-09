const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const arr = input[i].split(" ");
  const average =
    arr.slice(1).reduce((prev, curr) => prev + curr * 1, 0) / Number(arr[0]);
  let cnt = 0;

  for (let j = 1; j <= arr.length; j++) {
    if (arr[j] > average) cnt++;
  }

  console.log(((cnt / Number(arr[0])) * 100).toFixed(3) + "%");
}
