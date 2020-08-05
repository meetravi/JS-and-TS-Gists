"use strict";
let samplePerson;
samplePerson = {
    lastName: 'shankar',
    age: 35,
    printName(firstName) {
        console.log(` hi this is ${firstName}${this.lastName}`);
    }
};
samplePerson.printName('Ravi');
//# sourceMappingURL=interface.js.map