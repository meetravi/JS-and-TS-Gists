"use strict";
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
const result = addTwoNumbers(1, 2);
console.log('result', result);
var department;
(function (department) {
    department["CSE"] = "Computer Science";
    department["ME"] = "Mechanical Engineering";
    department["ECE"] = "Electronic communication engineering";
})(department || (department = {}));
const person = {
    name: 'Ravi',
    age: 35,
    interests: ['crypto', 'stocks'],
    role: ['Director', 'Developer'],
    department: department.CSE,
};
for (const interest of person.interests) {
    console.log(interest.toUpperCase());
}
const subtractTwoNumbers = (number1, number2) => number1 - number2;
// const subtractTwoNumbers: (number1: number, number2: number) => void =  (number1: number, number2: number) => number1 - number2;
const diff = subtractTwoNumbers(10, 5);
console.log('diff', diff);
let subtract;
subtract = subtractTwoNumbers;
console.log(subtract(100, 10));
let multiply;
const logIt = (num) => console.log(num);
multiply = function (number1, number2, logIt) {
    logIt(number1 * number2);
};
multiply(10, 10, logIt);
let random;
random = 123.45;
const returnAFunc = function (cbFunction) {
    cbFunction();
};
const hobbies = ['cooking', 'meditating'];
console.log('hobbies', ...hobbies);
const person1 = Object.assign({}, person);
const person2 = person;
const person3 = Object.assign({}, Object.assign({}, person), { kids: 2 });
console.log('person1', person);
console.log('person2', person2);
console.log('person3', person3);
const addManyNumbers = (...numbers) => {
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
};
// If it is tuple,
// const addManyNumbers = (...numbers: [number, number, number, number]) => {
//     return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
// }
const sum = addManyNumbers(1, 2, 3, 4, 5);
console.log('sum', sum);
const [hobby1, hobby2] = hobbies;
console.log('hobby1', hobby1);
console.log('hobby2', hobby2);
const { role: organizationalRole } = person;
console.log('organizationalRole', organizationalRole);
const inputText = document.getElementById('inputText');
inputText.value = 'Test';
//# sourceMappingURL=app.js.map