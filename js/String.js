/**
 * Reversing the string
 */

const str = "Hello world";

const reversedString = str.split("").reverse().join("");

console.log(`reversedString = `, reversedString);

/**
|--------------------------------------------------
| Reversing the string without reverse method
|--------------------------------------------------
*/

const str = "Hello world";

let reversedStringArr = [];

for (let i = str.length - 1; i >= 0; i--) {
  reversedStringArr.push(str.charAt(i));
}

const reversedString = reversedStringArr.join(",");
console.log("reversedString", reversedString);

/**
|--------------------------------------------------
| String methods
|--------------------------------------------------
*/

const str = "Hello World";

console.log(`str`, str.charAt(0));
const newStr = str.concat("Peace");
console.log("newStr", newStr);

console.log(newStr.toLowerCase().includes("peace"));
console.log(newStr.toLowerCase().indexOf("peace") !== -1);
console.log(newStr.toLowerCase().lastIndexOf("peace"));
console.log(newStr.toLowerCase().startsWith("peace"));
console.log(newStr.toLowerCase().endsWith("peace"));
console.log(newStr.toLowerCase().match("/peace/g"));
console.log(newStr.repeat(3));
console.log(" Hello World    ".trim());
console.log(" test   ".trim().length);
