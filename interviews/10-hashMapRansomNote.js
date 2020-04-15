// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function checkMagazine(magazine, note) {
  if (note.length > magazine.length) {
    console.log("No");
    return;
  }
  const hashMap = {};
  for (let i = 0; i < magazine.length; i++) {
    const magazineWord = magazine[i];
    hashMap[magazineWord] = (hashMap[magazineWord] || 0) + 1;
  }
  for (let j = 0; j < note.length; j++) {
    const noteWord = note[j];
    if (hashMap[noteWord]) {
      hashMap[noteWord] = hashMap[noteWord] - 1;
    } else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

const inputs01 = [
  "give me one grand today night".split(" "),
  "give one grand today".split(" "),
];
const inputs02 = [
  "two times three is not four".split(" "),
  "two times two is four".split(" "),
];
const inputs03 = [
  "ive got a lovely bunch of coconuts".split(" "),
  "ive got some coconuts".split(" "),
];

console.log(`Actual ${checkMagazine(...inputs01)} : Expected 'Yes'`);
console.log(`Actual ${checkMagazine(...inputs02)} : Expected 'No'`);
console.log(`Actual ${checkMagazine(...inputs03)} : Expected 'No'`);

/*
Attempt 01

function checkMagazine(magazine, note) {
  const hashMap = magazine.reduce(
    (hm, word) => ({ ...hm, [word]: (hm[word] || 0) + 1 }),
    {}
  );
  for (let i = 0; i < note.length; i++) {
    const noteWord = note[i];
    if (hashMap[noteWord]) {
      hashMap[noteWord] = hashMap[noteWord] - 1;
    } else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
*/
