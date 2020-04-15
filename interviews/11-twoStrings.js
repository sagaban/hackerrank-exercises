// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
function twoStrings(s1, s2) {
  // const lettersMap = {};
  // for (let i = 0; i < s1.length; i++) {
  //   const letter = s1[i];
  //   lettersMap[letter] = true;
  // }
  // return s2.split("").some((l) => lettersMap[l]) ? "YES" : "NO";
  return s2.split("").some((l) => s1.includes(l)) ? "YES" : "NO";
}

const inputs01 = ["hello", "world"];
const inputs02 = ["hi", "world"];
const inputs03 = ["be", "cat"];

console.log(`Actual ${twoStrings(...inputs01)} : Expected YES`);
console.log(`Actual ${twoStrings(...inputs02)} : Expected NO`);
console.log(`Actual ${twoStrings(...inputs03)} : Expected NO`);

/*
Attempt 01


*/
