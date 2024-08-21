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
num2 = Math.floor(Math.random() * 10) + 1;
console.log(num2);
