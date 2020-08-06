const stringConcatenation = (...args1) => (...args2) => args1 + " " + args2;

let testString = stringConcatenation("Hello World");

let finalResult = testString("I am looking for peace");
console.log("finalResult", finalResult);
