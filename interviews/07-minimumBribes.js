//www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

https: function minimumBribes(q) {
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    console.log("i :", i);
    console.log("q[i] :", q[i]);
    const diff = q[i] - 1 - i;
    if (diff > 2) {
      console.log("Too chaotic");
      return;
    }
    console.log("q[i] - 2 :", q[i] - 2);

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      console.log(" = q[j] :", q[j]);

      if (q[j] > q[i]) {
        bribes++;
        console.log(" = bribes :", bribes);

      }

    }
    console.log("-----------");
  }
  console.log(bribes);
}
console.log('\n');

// minimumBribes([2, 1, 5, 3, 4]);
console.log(`Expected ${3}\n`);

// minimumBribes([2, 5, 1, 3, 4]);
// console.log(`Expected '${"Too chaotic"}'\n`);

// minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
// console.log(`Expected '${"Too chaotic"}'\n`);

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
// console.log(`Expected ${7}\n`);
