// functions in an array

function hello() {
    console.log("Hello");
}
hello();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

function isAdult() {
    let age = 18;
    let personAge = 25;
    if (personAge >= age) {
        console.log("You are an adult");
    }
    else {
        console.log("You are not an adult");
    }
}
isAdult();

// Practice Question
// Question 1
// Create a function that prints a poem
function printPoem() {
    console.log("The sun shines bright in the sky,");
    console.log("The birds sing their sweet melody,");
    console.log("The flowers bloom with vibrant hue,");
    console.log("A beautiful world, for me and you.");
}
printPoem();

// Question 2
// Create a function to roll a dice and always display the value of the dice (1 to 6)
function rollDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a " + diceValue);
}
rollDice();


// Functions with Arguments

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("Inam", 19);
printInfo("Inam");   // order wise argruments access

function sum(a, b) {
    console.log(a + b);
}
sum(5, 6);
sum(4567876, 456787);

// Practice Question

// Question 1
// Create a  function that gives us the average of 3 numbers
function average(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
average(5, 6, 7);
average(5, 6); // error because of missing argument
average(5); // error because of missing argument

// Question 2
// Create a function that prints the multiplication table of a number.
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
printTable(5);
printTable(10);

// recursion
function sum2(a, b) {
    return a + b;  // nothing will execute after return 
}
console.log(sum2(sum2(1, 2), 3));

// Question 3
// get sum from 1 to 10
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(10));

// Question 4
// function that returns the concatenation of all strings in an array
let str = ["hi", "hello", "bye", "!"];
function concatStrings(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(concatStrings(str));


// scope
// function scope 
function calSum(a, b) {
    // function scope
    let sum = a + b;
    console.log(sum);
}
calSum(5, 6);  // sum will not access by outside the function

// block scope
{
    let a = 25;
    // it will not accessable out of the block 
}

// lexical scope
function outer() {
    let x = 10;
    function inner() {
        let a = 10;
        console.log(x);
    }
    inner();
    // 'a' variable is not access able here
}
outer(); // it will print 10

// Practice Questions
// Question 1

let greet = "Hello";
function changedGreet(){
    // global greet variable is not available in the function
    let greet = "Salam";
    console.log(greet);
    function innerGreet(){
        // greet is not accessable here because its a block scope variable
        console.log(greet);
    }
}
console.log(greet);
changedGreet();