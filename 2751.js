console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((v) => Number(v))
    .sort((a, b) => a - b)
    .join("\n")
);
