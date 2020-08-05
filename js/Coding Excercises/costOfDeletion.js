function solution(str, arr) {
  let val = 0;
  let index = [];

  for (let i = 0; i < str.length - 1; i++)
    if (str[i] === str[i + 1]) {
      index.push(i);
    }
  console.log("solution -> index", index);
  index.forEach((item) => {
    console.log("solution -> arr[item]", arr[item]);
    val += arr[item];
  });
  console.log("******* solution -> val", val);
  return val;
}

solution("abccbd", [0, 1, 2, 3, 4, 5]); // Should return 2

solution("aabbcc", [1, 2, 1, 2, 1, 2]); // Should return 3

solution("aaaa", [3, 4, 5, 6]); // Should return 12

solution("ababa", [10, 5, 10, 5, 10]); // Should return 0
