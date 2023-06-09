const input = require("fs").readFileSync("/dev/stdin");

const factorial = (num) => {
  if (num == 0) return 1;

  return num * factorial(num - 1);
};

console.log(factorial(input));
