// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
function arrayManipulation(n, queries) {
  const result = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i];
    result[a - 1] += k;
    if (b !== n)
      result[b] -= k;
  }
  let max = 0;
  let itt = 0;
  for (let j = 0; j < result.length; j++) {
    itt += result[j];
    if (itt > max) {
      max = itt;
    }
  }
  return max;
}

const inputs01 = [
  5,
  [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ],
];
const inputs02 = [
  10,
  [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ],
];

console.log(`Actual ${arrayManipulation(...inputs01)} : Expected ${200}`);
console.log(`Actual ${arrayManipulation(...inputs02)} : Expected ${10}`);

/*
Attempt 01

function arrayManipulation(n, queries) {
  const result = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    for (let j = query[0] - 1; j <= query[1] - 1; j++) {
      result[j] = result[j] + query[2];
    }
  }
  return result.reduce((max, element) => (element > max ? element : max), 0);
}

Attempt 02

function arrayManipulation(n, queries) {
  const result = new Array(n);
  let max = 0;
  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i];
    for (let j = a - 1; j < b; j++) {
      result[j] = (result[j] || 0) + k;
      max = result[j] > max ? result[j] : max;
    }
  }
  return max;
}


*/
