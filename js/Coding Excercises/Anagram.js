/**
|--------------------------------------------------
| Compare the two words if it is a anagram
|--------------------------------------------------
*/

const isAnagram = (word1, word2) => {
  const sortedWord1 = word1.toLowerCase().split("").sort().join("");
  const sortedWord2 = word2.toLowerCase().split("").sort().join("");

  sortedWord1 === sortedWord2
    ? console.log(`It's an anagram`)
    : console.log(`It's not an anagram`);
};

isAnagram("ravi", "ivar");
isAnagram("ravi", "test");
