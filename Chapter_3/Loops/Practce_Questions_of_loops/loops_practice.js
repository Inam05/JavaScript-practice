// Practice Questions of loops

// Question 1
// Print all even numbers from 0 to 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("num = ", i);
    }
}

/*
Question 2
Create a game where you start with any random game number. Ask the user to 
keep guessing the game number until the user enters correct value.
*/

let gameNumber = 25;

let userNumber = prompt("Guess the game number between 1 to 50");
while (userNumber != gameNumber) {
    userNumber = prompt("You guess a wrong number, Guess again");
}
console.log("Congratulations, you entered the right number");

/*
Question 3
Write a JavaScript function that checks if a given password is strong. 
A strong password has at least 8 characters, contains both uppercase and 
lowercase characters, includes at least one numeric digit, and has a 
special character (e.g., !, @, #, $, etc.). 
Use loops and conditionals to validate the password.
*/

// Prompt the user to enter a password
let password = prompt("Enter a password to check its strength:");

// Check if the password length is at least 8 characters
let isStrong = password.length >= 8;

// Initialize flags for different character types
let hasUppercase = false;
let hasLowercase = false;
let hasDigit = false;
let hasSpecialChar = false;

// Define a string of special characters
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Loop through each character in the password
for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
    } else if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
    } else if (char >= '0' && char <= '9') {
        hasDigit = true;
    } else if (specialChars.includes(char)) {
        hasSpecialChar = true;
    }
}

// Check if all conditions are met
isStrong = isStrong && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;

// Display the result
if (password !== null) {
    alert(`The password "${password}" is ${isStrong ? 'strong' : 'not strong'}.`);
}
