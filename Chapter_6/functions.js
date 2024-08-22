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