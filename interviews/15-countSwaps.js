// URL

function countSwaps(a) {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        counter++;
      }
    }
  }
  console.log(`Array is sorted in ${counter} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

const functionData = [
  {
    inputs: [[1, 2, 3]],
    expected: 0,
    hasOutput: false,
  },
  {
    inputs: [[3, 2, 1]],
    expected: 0,
    hasOutput: false,
  },
];

functionData.forEach(({ inputs, expected, hasOutput = true }) => {
  const actual = countSwaps(...inputs);
  if (hasOutput) console.log(`Actual ${actual} : Expected ${expected}`);
});

/*
Attempt 01


*/
