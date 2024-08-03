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
