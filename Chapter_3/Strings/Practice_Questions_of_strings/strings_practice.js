// Practice Questions

// Question 1
/*
Prompt the user to enter their full name. Generate a username for 
them based on the input. Start username with @, 
followed by their full name and ending with the fullname length.
*/

// Prompt the user to enter their full name
let fullName = prompt("Please enter your full name:");

// Remove spaces and special characters
let cleanName = fullName.replace(/[^a-zA-Z0-9]/g, '');

// Calculate the length of the full name
let nameLength = fullName.length;

// Generate the username
let username = '@' + cleanName + nameLength;

// Display the generated username
alert("Your generated username is: " + username);

//Question 2
/* Write a program that takes a string input from the user and reverses it using a loop. Ensure to handle cases where the string is empty. */
let str = prompt("Enter a string:");
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);

// Question 3
/* Create a program that checks if a given string is a palindrome (reads the same forwards and backwards). Use loops to compare characters from both ends of the string. */
let originalString = prompt("Enter a string:");
let palindromeCheck = true;
let lengthOfString = originalString.length;
for (let i = 0; i < lengthOfString / 2; i++) {
    if (originalString[i] !== originalString[lengthOfString - 1 - i]) {
        palindromeCheck = false;
        break;
    }
}
if (palindromeCheck) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}

// Question 4
/* Write a program that counts the frequency of each character in a given string. Use a loop and an object to store and display the results. */
let inputText = prompt("Enter a string:");
let charFrequency = {};
for (let i = 0; i < inputText.length; i++) {
    let character = inputText[i];
    if (charFrequency[character]) {
        charFrequency[character]++;
    } else {
        charFrequency[character] = 1;
    }
}
console.log("Character frequencies:", charFrequency);
