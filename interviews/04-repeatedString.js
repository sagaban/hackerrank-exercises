function repeatedString(s, n) {
  const asInString = s.replace(/[^a]/g, "").length;
  const repeat = Math.floor(n / s.length);
  const module = n % s.length;
  const asInRest = s.substring(0, module).replace(/[^a]/g, "").length;

  return asInString * repeat + asInRest;
}

console.log(`${repeatedString("aba", 10)} : ${7}`);
