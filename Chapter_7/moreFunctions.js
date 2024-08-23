// use of "this"
const student1 = {
    name: 'John Doe',
    age: 20,
    eng: 45,
    math: 50,
    science: 60,
    getAvg() {
        console.log(this);
        let sum = (this.eng + this.math + this.science) / 3;
        console.log(`${this.name} got avg marks = ${getAvg}`);
    }
};

student1.getAvg();
function getAvg() {
    console.log(this);
};
getAvg();


// try & cath
try {
    let num = 10 / 0;
    console.log(num);
} catch (error) {
    console.log(error.message);
}


// Miscellaneous Topics
// Arrow Function
const add = (a, b) => {
    return a + b;
}
console.log(add(10, 20)); // Output: 30
// Destructuring
let person = {
    name: 'John Doe',
    age: 20,
}
let { name, age } = person;
console.log(name, age); // Output: John Doe 20

// Implicint return in arrow function
const mul = (a, b) => (a * b);
console.log(mul(10, 20)); // Output: 200

// Set timeout function
console.log("hi there!");
setTimeout(() => {
    console.log('Hello World');
}, 2000);
console.log("My name is Inam Ul Hassan");

// set interval function
let id = setInterval(() => {
    console.log('Hello World');
}, 2000);
clearInterval(id);

// this key words with arrow function
// this keyword in arrow function
const person1 = {
    name: 'John Doe',
    marks: 84,
    prop: this,  // global scope 
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  // parent scope -> window obj
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);  // person  ->  parent scope
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);   // window obj  -> global scope
        }, 2000);
    },
};


// Practice Questions
// Question 1
// Write an arrow function that returns the square of a number 'n'
const square = (n) => n * n;
console.log(square(5)); // Output: 25

// Question 2
// Function that prints "Hello world" 5 times at intervals of 2s each.
let id3 = setInterval(() => {
    console.log("Hello World");
}, 2000);
setTimeout(() => {
    clearInterval(id3);
}, 10000);