// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

const longExample = require("./14-inputData");

function freqQuery(queries) {
  const trackMap = new Map();
  const freqMap = new Map();
  const frequency = [];
  for (let i = 0; i < queries.length; i++) {
    const action = queries[i];
    const value = action[1];
    const valueFrequency = trackMap.get(value) || 0;

    if (action[0] < 3) {
      const newFrequency =
        action[0] === 1 ? valueFrequency + 1 : valueFrequency - 1;
      if (valueFrequency) {
        let frequencyValues = freqMap.get(valueFrequency);
        frequencyValues.delete(value);
        freqMap.set(valueFrequency, frequencyValues);
      }
      if (newFrequency > 0) {
        trackMap.set(value, newFrequency);
        let newFrequencyValues = freqMap.get(newFrequency) || new Map();
        newFrequencyValues.set(value, true);
        freqMap.set(newFrequency, newFrequencyValues);
      } else {
        trackMap.delete(value);
      }
    } else {
      let freq = freqMap.get(value) && freqMap.get(value).size ? 1 : 0;
      frequency.push(freq);
    }
  }
  return frequency;
}

const functionData = [
  longExample,
  {
    inputs: [
      [
        [1, 89],
        [3, 15],
        [1, 12],
        [1, 47],
        [1, 23],
        [1, 66],
        [2, 28],
        [3, 2],
        [2, 15],
        [1, 16],
        [3, 16],
        [1, 17],
        [1, 73],
        [2, 44],
        [3, 14],
        [2, 30],
        [2, 38],
        [2, 4],
        [1, 4],
        [2, 35],
        [1, 28],
        [1, 9],
        [1, 68],
        [3, 1],
        [3, 33],
        [3, 5],
        [1, 36],
        [1, 30],
        [3, 22],
        [1, 72],
        [1, 68],
        [1, 62],
        [1, 88],
        [1, 79],
        [2, 9],
        [1, 10],
        [2, 44],
        [3, 38],
        [2, 13],
        [1, 61],
        [3, 3],
        [1, 78],
        [2, 27],
        [1, 28],
      ],
    ],
    expected: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  },
  {
    inputs: [
      [
        [1, 5],
        [1, 6],
        [3, 2],
        [1, 10],
        [1, 10],
        [1, 6],
        [2, 5],
        [3, 2],
      ],
    ],
    expected: [0, 1],
  },
  {
    inputs: [
      [
        [3, 4],
        [2, 1003],
        [1, 16],
        [3, 1],
      ],
    ],
    expected: [0, 1],
  },
  {
    inputs: [
      [
        [1, 3],
        [2, 3],
        [3, 2],
        [1, 4],
        [1, 5],
        [1, 5],
        [1, 4],
        [3, 2],
        [2, 4],
        [3, 2],
      ],
    ],
    expected: [0, 1, 1],
  },
];

functionData.forEach(({ inputs, expected }) => {
  console.log(`Actual ${freqQuery(...inputs)} : Expected ${expected}`);
});

/*
Attempt 01


*/
