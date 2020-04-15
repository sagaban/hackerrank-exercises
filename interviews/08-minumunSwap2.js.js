// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] - 1 === i) {
        if (i !== j) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          swaps++;
        }
        break;
      }
    }
  }
  return swaps;
}
const inputs01 = [[2, 3, 4, 1, 5]];
const inputs02 = [[7, 1, 3, 2, 4, 5, 6]];
const inputs03 = [[1, 3, 5, 2, 4, 6, 7]];

console.log(`Actual ${minimumSwaps(...inputs01)} : Expected ${3}`);
console.log(`Actual ${minimumSwaps(...inputs02)} : Expected ${5}`);
console.log(`Actual ${minimumSwaps(...inputs03)} : Expected ${3}`);
