function jumpingOnClouds(c) {
  let jumps = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c + 2 === c.length || c[i + 2] === 1) {
      i++;
    } else {
      i += 2;
    }
    jumps++;
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), " should be 4");
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0]), " should be 5");
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0, 0]), " should be 5");
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0, 1, 0]), " should be 4");
console.log(jumpingOnClouds([0, 0, 0, 0, 0, 0 , 1, 0, 0, 1, 0]), " should be 5");
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]), " should be 3");
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), " should be 4");
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0]), " should be 5");
console.log(jumpingOnClouds([0, 0]), " should be 1");
