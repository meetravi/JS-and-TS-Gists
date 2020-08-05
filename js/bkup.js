function solution(str) {
  let val = 0;
  for (let i = 0; i < str.length - 1; i++)
    // If two consecutive characters are
    // the same, delete one of them.
    if (str[i] == str[i + 1]) {
      val++;
    }
  console.log("solution -> val", val);
  return val;
}

solution("ABBBC");
