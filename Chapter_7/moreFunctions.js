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


// Question 1
/* JavaScript doesn’t support function overloading directly. Write a function that simulates overloading by checking the 
type and number of arguments and performs different operations based on that. */
function process(value1, value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return value1 + value2; // Sum if both are numbers
    } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        return value1.concat(value2); // Concatenate if both are strings
    } else {
        return 'Invalid input';
    }
}

console.log(process(2, 3)); // 5
console.log(process('Hello', 'World')); // HelloWorld

// Question 2
/* Write a higher-order function that takes an asynchronous function and a delay time in milliseconds. It should return a new 
function that delays the execution of the provided asynchronous function. */
function delayExecution(asyncFn, delay) {
    return function (...args) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(asyncFn(...args));
            }, delay);
        });
    };
}

async function fetchData(id) {
    return `Data for ${id}`;
}

const delayedFetchData = delayExecution(fetchData, 2000);
delayedFetchData(1).then(console.log); // Logs data after 2 seconds


// Question 3
/* Create a function that composes multiple functions together dynamically based on the provided array of functions. The 
composed function should apply each function in sequence to a given value. */
function composeFunctions(...fns) {
    return function (value) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

const add2 = x => x + 2;
const multiplyBy3 = x => x * 3;
const subtract5 = x => x - 5;

const composedFunction = composeFunctions(add2, multiplyBy3, subtract5);
console.log(composedFunction(5)); // ((5 + 2) * 3) - 5 = 16


// Question 4
/* Write a recursive function that computes the nth Fibonacci number. The function should handle cases where n is zero or a 
negative integer by returning appropriate messages. */
function fibonacci(n) {
    if (n < 0) return 'Invalid input'; // Handle negative numbers
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(-1)); // Invalid input


// Question 5
/* Implement a function that maintains a private state using closure. The function should allow incrementing and getting 
the current state value. */
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getValue: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
