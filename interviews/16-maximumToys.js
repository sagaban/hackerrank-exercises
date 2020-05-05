// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  let sum = 0;
  let i = 0;
  while (sum < k) {
    sum += prices[i];
    i++;
  }
  return i - 1;
}

const functionData = [
  {
    inputs: [[1, 12, 5, 111, 200, 1000, 10], 50],
    expected: 4,
  },
  {
    inputs: [[1, 2, 3, 4], 7],
    expected: 3,
  },
  {
    inputs: [[3, 7, 2, 9, 4], 15],
    expected: 3,
  },
];

functionData.forEach(({ inputs, expected }) => {
  console.log(`Actual ${maximumToys(...inputs)} : Expected ${expected}`);
});

/*
Attempt 01


*/
