/**
|--------------------------------------------------
| Cloning objects
|--------------------------------------------------
*/

const food = { curry: "🍛", rice: "🍚" };

/**
 * using Rest operator
 *
 */
let clonedFood = { ...food };
console.log("clonedFood", clonedFood);

/**
 * using Object.assign
 *
 */

const clonedFood2 = Object.assign({}, food);

delete clonedFood.rice;

console.log("clonedFood", clonedFood);
clonedFood = {
  ...clonedFood,
  rice: "🍚",
};
console.log("clonedFood", clonedFood);
console.log("clonedFood2", clonedFood2);

/**
 * using JSON.Parse(JSON.Stringify)
 *
 */

const clonedFood3 = JSON.parse(JSON.stringify(clonedFood));
console.log("clonedFood3", clonedFood3);

/**
|--------------------------------------------------
| ES6 Way for comparing 2 objects
|--------------------------------------------------
*/
const k1 = { fruit: "🥝" };
const k2 = { fruit: "🥝" };

console.log(`k1`, Object.entries(k1).toString());
console.log(`k1`, Object.keys(k1));
console.log(`k1`, Object.values(k1));

console.log(
  `is equal`,
  Object.entries(k1).toString() === Object.entries(k2).toString()
);

/**
|--------------------------------------------------
| To Convert Object to Array
|--------------------------------------------------
*/

const fruit = { kiwi: "🥝", apple: "🍎" };

const fruitArray = Object.entries(fruit);
console.log("fruitArray", fruitArray);

/**
|--------------------------------------------------
| To Convert Array to Object
|--------------------------------------------------
*/

const fruitObject = Object.fromEntries(fruitArray);
console.log("fruitObject", fruitObject);

/**
|--------------------------------------------------
| To check if object is available
|--------------------------------------------------
*/

//We can use the built-in Object.keys method to check for an empty object.

const empty = {};

Object.keys(empty).length === 0 && empty.constructor === Object;
