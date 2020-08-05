/**
|--------------------------------------------------
| check if the word is a palindrome
|--------------------------------------------------
*/

/**
 * Using For loop
 *
 */
const isPalindrome = (word) => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

let palindrome = isPalindrome("radar");
console.log("palindrome", palindrome);
palindrome = isPalindrome("test");
console.log("palindrome", palindrome);

/**
 * using split method
 *
 */

const isPalindrome = (word) => {
  const reversedWord = word.toLowerCase().split("").reverse().join("");

  word === reversedWord
    ? console.log("Palindrome")
    : console.log("Not a palindrome");
};

let palindrome = isPalindrome("radar");
console.log("palindrome", palindrome);
palindrome = isPalindrome("test");
console.log("palindrome", palindrome);
