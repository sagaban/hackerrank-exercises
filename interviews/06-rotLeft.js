// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a, d) {
  if (a.length === d) return a;
  return a.map((e, i, arr) => {
    return arr[(i + d) % arr.length];
  });
}

console.log(
  `Actual ${rotLeft([1, 2, 3, 4, 5], 4)} : Expected ${[5, 1, 2, 3, 4]}`
);
console.log(
  `Actual ${rotLeft(
    [
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
    ],
    10
  )} : Expected ${[
    77,
    97,
    58,
    1,
    86,
    58,
    26,
    10,
    86,
    51,
    41,
    73,
    89,
    7,
    10,
    1,
    59,
    58,
    84,
    77,
  ]}`
);
