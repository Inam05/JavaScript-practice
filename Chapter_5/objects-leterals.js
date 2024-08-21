// objects literals

const person = {
    name: 'John',
    age: 30,
    address:
    {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
}

// TWITTER  POST

const post = {
    id: 1,
    text: 'Hello, world!',
    likes: 10,
    comments: [
        { id: 1, text: 'Great post!' },
        { id: 2, text: 'Thanks!' },
    ],
    user: {
        id: 1,
        name: 'John',
        avatar: 'https://example.com/john.jpg',
    }
}
console.log(post);

// converstion of different types of things into strings for objects in js
const obj = {
    1: "a",
    2: "b",
    3: "c",
    null: "d",
    undefined: "e",
    true: "f"
};

console.log(obj);


// update the objects literals

const student = {
    name: 'John',
    age: 20,
    address: "USA",
    marks: 84
};
console.log(student);
student.age = 10;
student.marks = "87";
console.log(student);
delete student.age;
console.log(student);


// nested objects 

const classInfo = {
    inam: {
        grade: "A+",
        city: "Mian Channu"
    },
    ukasha: {
        grade: "A",
        city: "Lahore"
    }
};

console.log(classInfo);

// arrays of objects

const bioData = [
    {
        name: "Inam",
        grade: "A+",
        city: "Mian Channu"
    },
    {
        name: "Ukasha",
        grade: "A",
        city: "Lahore"
    }
]

console.log(bioData);


// random generator number through MATH.RANDOM

console.log(Math.random());

let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;
console.log(num);

// second method
let num2 = Math.floor(Math.random() * 10) + 1;
console.log(num2);



// Practice Questions

// Question 1
/* Generate a random number between 1 and 100. */
let num3 = Math.floor(Math.random() * 100) + 1;
console.log(num3);

// Question 2
/* Generate a random number between 1 and 20. */
let num4 = Math.floor(Math.random() * 20) + 1;
console.log(num4);

// Question 3
/* Generate a random number between 20 and 50. */
let num5 = Math.floor(Math.random() * 30) + 20;
console.log(num5);



// Guessing game
/* User enters a max number and then tries to guess a random generated number between 1 to max */
const max = prompt("Enter a max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");
while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    else if (guess == random) {
        console.log("you won! Random number was", random);
        break;
    }
    else if (guess < random) {
        guess = prompt("Hint : Your guess was too small. Please try again!");
    }
    else if (guess > random) {
        guess = prompt("Hint : Your guess was too big. Please try again!");
    }
}
