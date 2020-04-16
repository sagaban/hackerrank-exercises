// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
const longExample = require("./13-inputData");

function countTriplets(arr, r) {
  if (arr.length < 3) return 0;
  let triplets = 0;
  const secondSteps = new Map();
  const thirdSteps = new Map();
  for (let i = 0; i < arr.length; i++) {
    const currentStepValue = arr[i];

    // If there is a thirdStep with current value, add to coutner
    const thirdStepCurrentValue = thirdSteps.get(currentStepValue) || 0;
    if (thirdStepCurrentValue) {
      triplets += thirdStepCurrentValue;
    }

    // If there is a secondStep with current value, add to thirdSteps
    const secondStepCurrentValue = secondSteps.get(currentStepValue) || 0;
    if (secondStepCurrentValue) {
      const thirdStepNextValue = thirdSteps.get(currentStepValue * r) || 0;
      thirdSteps.set(currentStepValue * r, thirdStepNextValue + secondStepCurrentValue);
    }

    // increment second step possible value
    const secondStepNextValue = secondSteps.get(currentStepValue * r) || 0;
    secondSteps.set(currentStepValue * r, secondStepNextValue + 1);
  }
  return triplets;
}

const functionData = [
  {
    inputs: [[1, 3, 1, 3, 27, 9, 3, 9, 9, 27], 3],
    expected: 21,
  },
  {
    inputs: [[1, 2, 2, 4], 2],
    expected: 2,
  },
  {
    inputs: [[1, 3, 9, 9, 27, 81], 3],
    expected: 6,
  },
  {
    inputs: [[1, 5, 5, 25, 125], 5],
    expected: 4,
  },
  longExample
];

functionData.forEach(({ inputs, expected, skip = false }) => {
  if (!skip)
    console.log(`Actual ${countTriplets(...inputs)} : Expected ${expected}`);
});

/*
Attempt 01: I was not taking into consideration tthat the array can be unsorted.
Thats a restriction

function countTriplets(arr, r) {
  if (arr.length < 3) return 0;
  const hashMap = {};
  function getValue(key) {
    return hashMap[`${key}`] || 0;
  }
  for (let i = 0; i < arr.length; i++) {
    hashMap[`${arr[i]}`] = getValue(arr[i]) + 1;
  }
  console.log(hashMap)
  let triplets = 0;
  let objectKeys = Object.keys(hashMap).sort((a,b) => +a - +b);
  for (let j = 0; j < objectKeys.length - 2; j++) {
    const amount1 = getValue(objectKeys[j]);
    const amount2 = getValue(objectKeys[j] * r);
    if (!amount2) break;
    const amount3 = getValue(objectKeys[j] * r * r);
    triplets += amount1 * amount2 * amount3;
  }
  return triplets;
}

Attempt 2

function countTriplets(arr, r) {
  if (arr.length < 3) return 0;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const mapValue = (map.get(arr[i]) || []).concat(i);
    map.set(arr[i], mapValue);
  }
  console.log(map)

  function getNextValueArray(currentValue, currentIndex, deep = true) {
    const indexArray = (map.get(currentValue * r) || [])
      .filter((p) => p > currentIndex);
    if (deep && indexArray.length) {
      let count = 0;
      for (let i = 0; i < indexArray.length; i++) {
        const index = indexArray[i];
        count += getNextValueArray(currentValue * r, index, false);
      }
      return count;
    }
    return indexArray.length;
  }

  let triplets = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    triplets += getNextValueArray(currentValue, i);
  }
  return triplets;
}


*/
