function test() {
  const arr = [9911, 10081, 9890, 10090, 9986, 10161, 10034, 10094, 9814, 9939];
  let counter = 0.0;
  for (let i = 0; i < arr.length - 2; i++) {
    console.log(arr[i])
    counter += arr[i] * arr[i + 1] * arr[i + 2];
  }
  console.log(counter);
}
test()
