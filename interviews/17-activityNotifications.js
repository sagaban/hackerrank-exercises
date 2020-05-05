// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function activityNotifications(expenditure, d) {
  function getMedian(repetitionArray, d, medianPosition) {
    let amountsCounter = 0;
    let leftValue = 0;
    while (amountsCounter < medianPosition) {
      amountsCounter += repetitionArray[leftValue];
      leftValue++;
    }

    let rightValue = leftValue;
    leftValue--;

    if (amountsCounter > medianPosition || d % 2 !== 0) {
      return leftValue;
    } else {
      while (repetitionArray[rightValue] == 0) {
        rightValue++;
      }
      return (leftValue + rightValue) / 2;
    }
  }

  const repetitionArray = new Array(201).fill(0);
  for (let i = 0; i < d; i++) {
    repetitionArray[expenditure[i]]++;
  }
  const medianPosition = d % 2 == 0 ? d / 2 : d / 2 + 0.5;
  let sum = 0;
  for (let i = d; i < expenditure.length; i++) {
    const median = getMedian(repetitionArray, d, medianPosition);

    if (expenditure[i] >= median * 2) {
      sum++;
    }
    repetitionArray[expenditure[i]]++;
    repetitionArray[expenditure[i - d]]--;
  }
  return sum;
}
const functionData = [
  // {
  //   inputs: [[2, 3, 4, 2, 3, 6, 8, 4, 5], 5],
  //   expected: 2,
  // },
  {
    inputs: [[1, 2, 3, 4, 4], 4],
    expected: 0,
  },
];

functionData.forEach(({ inputs, expected }) => {
  console.log(
    `Actual ${activityNotifications(...inputs)} : Expected ${expected}`
  );
});

/*
Attempt 01
function activityNotifications(expenditure, d) {
  let sum = 0;
  for (let i = d; i < expenditure.length; i++) {
    const sorted = expenditure.slice(i - d, i).sort((a, b) => a - b);
    let median =
      d % 2 == 1
        ? sorted[i - d / 2 - 0.5]
        : (sorted[i - d / 2] + sorted[i - d / 2 - 1]) / 2;

    if (expenditure[i] >= median * 2) {
      sum++;
    }
  }
  return sum;
}

Attempt 02

function activityNotifications(expenditure, d) {
  function updateMedianArray(array, oldValue, newValue) {
    if (newValue === oldValue) return;
    const toReplaceIndex = array.indexOf(oldValue);
    sorted.splice(toReplaceIndex, 1);
    for (let i = 0; i < array.length; i++) {
      if (array[i] > newValue) {
        return sorted.splice(i, 0, newValue);
      }
    }
    return array.push(newValue);
  }
  let sum = 0;
  const sorted = expenditure.slice(0, d).sort((a, b) => a - b);

  for (let i = d; i < expenditure.length; i++) {
    const aux = i - d / 2;
    let median =
      d % 2 == 1 ? sorted[aux - 0.5] : (sorted[aux] + sorted[aux - 1]) / 2;

    if (expenditure[i] >= median * 2) {
      sum++;
    }
    updateMedianArray(sorted, expenditure[i - d], expenditure[i]);
  }
  return sum;
}


*/
