/**
|--------------------------------------------------
| Cloning Array
|--------------------------------------------------
*/

const smileyArray = ["😃", "😅", "😊"];

/**
 * using concat
 */

const smileyArray1 = [].concat(smileyArray);
console.log("smileyArray1", smileyArray1);

/**
 * using rest operator
 */

const smileyArray2 = [...smileyArray];
console.log("smileyArray2", smileyArray2);

/**
 * using slice
 */

const smileyArray3 = smileyArray.slice();
console.log("smileyArray3", smileyArray3);

/**
 * using Array.from
 */

const smileyArray4 = Array.from(smileyArray);
console.log("smileyArray4", smileyArray4);

/**
|--------------------------------------------------
| Merge Arrays
|--------------------------------------------------
*/

const catSmileyArray = ["😺", "😻", "😺"];

/**
 * using concat
 */
const mergedArrays = smileyArray.concat(catSmileyArray);
console.log("mergedArrays", mergedArrays);
/**
 * using spread operator
 */
const mergedArrays2 = [...smileyArray, ...catSmileyArray];
console.log("mergedArrays2", mergedArrays2);
/**
 * using push
 */
let mergedArrays3 = [];
mergedArrays3.push(...smileyArray, ...catSmileyArray);
console.log("mergedArrays3", mergedArrays3);

/**
|--------------------------------------------------
| Reversing an array
|--------------------------------------------------
*/

/**
 * Mutates the array when we use reverse()
 *
 */

const aging = ["👶", "👦", "👨", "👴"];

console.time("reverseAging");
const reverseAging = aging.reverse();
console.timeEnd("reverseAging");
console.log("reverseAging", reverseAging);
/**
 * Using slice and reverse
 *
 */

console.time("reverseAging2");
const reverseAging2 = aging.slice().reverse();
console.timeEnd("reverseAging2");
console.log("reverseAging2", reverseAging2);

/**
|--------------------------------------------------
| Array built in methods
|--------------------------------------------------
*/
const clonedArray5 = smileyArray.slice(0);
console.log("clonedArray5", clonedArray5);

const aging = ["👶", "👦", "👨", "👴"];

aging.splice(2, 1, "👪");
console.log("aging", aging);

console.log("isArray=", Array.isArray(aging));
/**
|--------------------------------------------------
| Map, set, forEach, keys
|--------------------------------------------------
*/
const noArray = [1, 2, 3, 4, 5, 6];

const twoMultiples = noArray.map((item) => item * 2);
console.log("twoMultiples", twoMultiples);

let threeMultipleVal = 0;
const threeMultiples = noArray.forEach((item) => console.log(`item`, item));
console.log("threeMultiples", threeMultiples);

const duplicateArray = [1, 2, 3, 2, 3, 4, 5, 7];
const newSet = [...new Set(duplicateArray)];
console.log("newSet", newSet);

/**
|--------------------------------------------------
| Find, filter
|--------------------------------------------------
*/
const divisibleByTwo = noArray.filter((item) => item % 2 === 0); //Filters the complete result
console.log("divisibleByTwo", divisibleByTwo);

const findingTheFirstDivisibleByTwo = noArray.find((item) => item % 2 === 0); // exits with the first find
console.log("findingTheFirstDivisibleByTwo", findingTheFirstDivisibleByTwo);
/**
|--------------------------------------------------
| some, every, sort, reverse, includes
|--------------------------------------------------
*/
const testArray = ["t", "e", "s", "t"];

console.log(
  `some items contain t:`,
  testArray.some((item) => item === "t")
);
console.log(
  `evert items contain t:`,
  testArray.every((item) => item === "t")
);

console.log(`sort`, testArray.sort());
console.log(`reverse`, testArray.reverse());

console.log(testArray.includes("t"));
