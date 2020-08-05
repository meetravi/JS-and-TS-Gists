interface Person {
    lastName: string;
    age: number;
    printName(name: string): void;
}

let samplePerson: Person;


samplePerson = {
    lastName: 'shankar',
    age: 35,
    printName(firstName: String) {
        console.log(` hi this is ${firstName}${this.lastName}`)
    }
}

samplePerson.printName('Ravi');