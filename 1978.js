const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = input[1].split(" ");

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) == 1) continue;

  let cnt = 0;
  for (let j = 2; j <= Math.sqrt(Number(arr[i])); j++) {
    if (Number(arr[i]) % j == 0) cnt++;
  }
  if (cnt == 0) answer++;
}

console.log(answer);
