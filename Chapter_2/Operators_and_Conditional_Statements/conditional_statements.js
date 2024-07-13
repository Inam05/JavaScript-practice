// if statements
// example 1
let age = 25;
if (age > 18) {
    console.log("You can vote")
}
if (age < 18) {
    console.log("You can't vote")
}

// example 2
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);

// if-else statements
// example 1

let age_ = 17;
if (age_ > 18) {
    console.log("You can vote")
}
else {
    console.log("You can't vote")
}

// example 2
let mode_ = "light";
let color_ = "white";
if (mode_ === "dark") {
    color_ = "black";
}
else {
    color_ = "white";
}
console.log(color_);

// example 3 (odd or even)

let number = 5;
if (number % 2 === 0) {
    console.log(number, "is even");
}
else {
    console.log(number, "is odd");
}

// else-if statements
// example 1
let age__ = 17;
if (age__ < 18) {
    console.log("You are junior.")
}
else if (age__ < 30) {
    console.log("You are adult.")
}
else {
    console.log("You are senior.")
}

// Ternary Operators   condition ? true option : false option
// example 1
let age___ = 25;
let message = (age___ < 18) ? "You are junior." : "You are adult."; // if true then "You are junior." else "You are adult."
console.log(message);

// switch statements
// example 1
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

// example 2
const foo = 0;
switch (foo) {
    case -1:
        console.log("negative 1");
        break;
    case 0: // Value of foo matches this criteria; execution starts from here
        console.log(0);
    // Forgotten break! Execution falls through
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // Break encountered; will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log("default");
}

// example 3
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");