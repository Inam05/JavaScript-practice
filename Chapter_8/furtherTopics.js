// Array Methods
// 1. forEach
// 2. map
// 3. filter
// 4. reduce
// 5. some
// 6. every
// 7. find

// forEach
// The forEach() method calls a function once for each array element.
// Syntax: arr.forEach(callback(currentValue, index, array) { });
// Example:
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(myFunction);
function myFunction(item, index, array) {
    console.log(item + " " + index + " " + array);
};
let arr = [1, 2, 3, 4, 5];
let print = function (el) {
    console.log(el);
};

arr.forEach(print);
console.log("Through simple function:-");
arr.forEach(function (el) {
    console.log(el);
});

let arr1 = [{
    name: "Inam",
    marks: 86,
},
{
    name: "Ukasha",
    marks: 85.5,
},
{
    name: "Me",
    marks: 85,
}];
arr1.forEach((student) => {
    console.log(student.marks);
});


// map
// The map() method creates a new array with the results of applying a provided function on every element
// in this array.
// Syntax: arr.map(callback(currentValue, index, array) { });
// Example:
let num = [1, 2, 3, 4, 5];
let square = num.map(function (x) {
    return x * x;
});
console.log(square);

let gpa = arr1.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

// filter
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let even = num1.filter(function (x) {
    return x % 2 == 0;  // true for even , false for odd
});
console.log(even);
let odd = num1.filter(function (x) {
    return x % 2 != 0;  // true for odd , false for even
});
console.log(odd);

// every
// The every() method tests whether all elements in the array pass the test implemented by the provided function
// Syntax: arr.every(callback(element, index, array) { });
// Example:
let num2 = [1, 2, 3, 4, 5];
let isEven = num2.every(function (x) {  // AND gate 
    return x % 2 == 0;
});
console.log(isEven); // false  


// reduce
// The reduce() method applies a function against an accumulator and each element in the array (from left
// to right) to reduce it to a single value.
// Syntax: arr.reduce(callback(accumulator, currentValue, index, array) { }, initialValue);
// Example:
let num3 = [1, 2, 3, 4, 5];
let sum = num3.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum); // 15



// default parameters 
// In JavaScript, you can define a function with default parameters. If a value isn't provided for
// a parameter when the function is called, JavaScript uses the default value.
// Example:
function sum1(a, b = 5) {
    return a + b;
}
console.log(sum1(7, 5));
console.log(sum1(7)); // 12


// spread
// The spread operator is a feature in JavaScript that allows an iterable such as an array or string to
// be expanded in places where zero or more arguments are expected.
// Example:
let num4 = [1, 2, 3, 4, 5];
let num5 = [...num4]; // spread operator
console.log(num5); // [1, 2, 3, 4, 5]

// rest 
// The rest parameter syntax, ...args, allows a function to accept a variable number of arguments as
// an array.
// Example:
function sum2(...args) {
    return args.reduce((a, b) => a + b, 0);
};
console.log(sum2(1, 2, 3, 4, 5));

function min() {
    console.log(arguments);
};
min(1, 2, 3, 4, 5);
// arguments is an array like object of the arguments passed to a function. It contains the values of
// all the arguments passed to the function in the order they were passed in. It is not an
// array, but it can be treated like one.
// Example:
// function min() {
//     console.log(arguments);
// };
// min(1, 2, 3, 4, 5);
// Output: [1, 2, 3, 4, 5]
// The arguments object is not available in arrow functions. Instead, you can use the rest
// parameter syntax to achieve the same result.
function sum4() {
    return arguments.reduce((sum4, el) => sum4 + el);
};
// console.log(sum4(1, 2, 3, 4, 5));   not used by argruments.reduce

// destructuring
// Destructuring is a feature in JavaScript that allows you to unpack values from arrays, objects,
// maps, sets, and other data structures into distinct variables.
// Example:
let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
};
let { name, age, occupation } = person;
console.log(name); // John
console.log(age); // 30
console.log(occupation); // Developer
