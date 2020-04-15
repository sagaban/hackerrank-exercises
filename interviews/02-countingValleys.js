function countingValleys(n, s) {
  if (n <= 0) return 0;
  let currentLevel = 0;
  let valleyCounter = 0;
  for (let i = 0; i < n; i++) {
    currentLevel += s[i] === "U" ? 1 : -1;
    if (currentLevel === 0 && s[i] === "U") {
      valleyCounter++;
    }
  }
  return valleyCounter;
}

console.log(
  `Actual ${countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"])} : Expected ${1}`
);
