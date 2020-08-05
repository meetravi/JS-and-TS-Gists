function addTwoNumbers(number1: number, number2: number) {
    return number1 + number2
}

const result = addTwoNumbers(1, 2)
console.log('result', result)

enum department {
    CSE = 'Computer Science',
    ME = 'Mechanical Engineering',
    ECE = 'Electronic communication engineering',
}

type role = [number | string, string]
type personName = 'Ravi' | 'Keerthu'

const person: {
    name: personName
    age: number
    interests: string[]
    role: role
    department: department
} = {
    name: 'Ravi',
    age: 35,
    interests: ['crypto', 'stocks'],
    role: ['Director', 'Developer'],
    department: department.CSE,
}

for (const interest of person.interests) {
    console.log(interest.toUpperCase())
}

const subtractTwoNumbers = (number1: number, number2: number) =>
    number1 - number2

// const subtractTwoNumbers: (number1: number, number2: number) => void =  (number1: number, number2: number) => number1 - number2;

const diff = subtractTwoNumbers(10, 5)

console.log('diff', diff)

let subtract: Function

subtract = subtractTwoNumbers

console.log(subtract(100, 10))

let multiply: (
    number1: number,
    number2: number,
    cb: (num: number) => void
) => void

const logIt = (num: number) => console.log(num)

multiply = function (number1: number, number2: number, logIt) {
    logIt(number1 * number2)
}

multiply(10, 10, logIt)

let random: unknown

random = 123.45

// function generateError(message: string, errorCode: number): never {
//     throw { message, errorCode};
// }

// generateError('An error occured', 231);

type CallbackFunction = () => void
const returnAFunc = function (cbFunction: CallbackFunction) {
    cbFunction()
}

const hobbies = ['cooking', 'meditating']

console.log('hobbies', ...hobbies)

const person1 = { ...person }
const person2 = person

const person3 = Object.assign({}, { ...person }, { kids: 2 })
console.log('person1', person)
console.log('person2', person2)
console.log('person3', person3)

const addManyNumbers = (...numbers: number[]) => {
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0)
}

// If it is tuple,
// const addManyNumbers = (...numbers: [number, number, number, number]) => {
//     return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
// }

const sum = addManyNumbers(1, 2, 3, 4, 5)

console.log('sum', sum)

const [hobby1, hobby2] = hobbies

console.log('hobby1', hobby1)
console.log('hobby2', hobby2)

const { role: organizationalRole } = person

console.log('organizationalRole', organizationalRole)

const inputText = <HTMLInputElement>document.getElementById('inputText')!

inputText.value = 'Test'

const app: Array<string> = []

console.log('app', app)
