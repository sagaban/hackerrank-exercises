// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function sherlockAndAnagrams(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    const hashMap = {};
    for (let j = i + 1; j <= s.length; j++) {
      const baseSubstring = s.substring(i, j).split("").sort().join("");
      // console.log(`\nFor subStr "${baseSubstring}" at ${i}, ${j}`);
      // hashMap[baseSubstring] = `(${i}, ${j})`;
      hashMap[baseSubstring] = true;
      for (let k = 1; k + j <= s.length; k++) {
        // console.log(`${i + k}, ${j + k}`);
        const comparedSubString = s.substring(i+k, j+k).split("").sort().join("");
        if (hashMap[comparedSubString]) {
          // console.log(`Match with ${hashMap[baseSubstring]} - (${i+k}, ${j+k})`);
          counter++;
        }
      }
    }
  }
  return counter;
}

const inputs01 = ["abba"];
const inputs02 = ["abcd"];
const inputs03 = ["ifailuhkqq"];
const inputs04 = ["kkkk"];
const inputs05 = ["cdcd"];

console.log(`Actual ${sherlockAndAnagrams(...inputs01)} : Expected ${4}`);
console.log(`Actual ${sherlockAndAnagrams(...inputs02)} : Expected ${0}`);
console.log(`Actual ${sherlockAndAnagrams(...inputs03)} : Expected ${3}`);
console.log(`Actual ${sherlockAndAnagrams(...inputs04)} : Expected ${10}`);
console.log(`Actual ${sherlockAndAnagrams(...inputs05)} : Expected ${5}`);

/*
Attempt 01


*/
