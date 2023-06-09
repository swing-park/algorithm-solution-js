const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  let cnt = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "O") {
      cnt++;
    } else {
      cnt = 0;
    }
    sum += cnt;
  }

  console.log(sum);
}
