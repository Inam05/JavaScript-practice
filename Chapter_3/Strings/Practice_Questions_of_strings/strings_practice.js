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
