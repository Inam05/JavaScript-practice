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

// Question 5
/* Implement a program that searches for a substring within a given string and returns the index of its first occurrence. Use a loop to iterate through the main string and compare substrings. */
let mainString = prompt("Enter a string:");
let searchSubstring = prompt("Enter a substring:");
let foundIndex = -1;
for (let i = 0; i <= mainString.length - searchSubstring.length; i++) {
    if (mainString.slice(i, i + searchSubstring.length) === searchSubstring) {
        foundIndex = i;
        break;
    }
}
console.log("Index of first occurrence:", foundIndex);


// Question 6
/* Write a program that compresses a string such that 'aaabbcc' becomes 'a3b2c2'. Use loops to count consecutive characters and append the counts to the result string. */
let originalText = prompt("Enter a string:");
let compressedText = "";
let charCount = 1;
for (let i = 0; i < originalText.length; i++) {
    if (originalText[i] === originalText[i + 1]) {
        charCount++;
    } else {
        compressedText += originalText[i] + charCount;
        charCount = 1;
    }
}
console.log("Compressed string:", compressedText);

// Question 7 
/* Create a program that checks if two strings are anagrams of each other (contain the same characters in any order). Use loops and sorting or frequency counting to determine if they match. */
let firstString = prompt("Enter the first string:");
let secondString = prompt("Enter the second string:");
let areAnagrams = true;

if (firstString.length !== secondString.length) {
    areAnagrams = false;
} else {
    let charCount1 = {};
    let charCount2 = {};

    for (let i = 0; i < firstString.length; i++) {
        charCount1[firstString[i]] = (charCount1[firstString[i]] || 0) + 1;
        charCount2[secondString[i]] = (charCount2[secondString[i]] || 0) + 1;
    }

    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            areAnagrams = false;
            break;
        }
    }
}

if (areAnagrams) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}

// Question 8 
/* Write a program that finds the longest common prefix among an array of strings. Use loops to compare characters at each position across all strings. */
let stringArray = prompt("Enter an array of strings (comma-separated):").split(",");
if (stringArray.length === 0) {
    console.log("No common prefix.");
} else {
    let commonPrefix = stringArray[0];
    for (let i = 1; i < stringArray.length; i++) {
        while (stringArray[i].indexOf(commonPrefix) !== 0) {
            commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
            if (commonPrefix === "") break;
        }
    }
    console.log("Longest common prefix:", commonPrefix);
}

// Question 9 
/* Implement a program that checks if one string is a rotation of another (e.g., "abcd" and "dabc"). Use loops to create rotated versions of the string and compare them. */
let strOne = prompt("Enter the first string:");
let strTwo = prompt("Enter the second string:");
let isRotation = false;

if (strOne.length === strTwo.length && strOne.length > 0) {
    let concatenatedString = strOne + strOne;
    if (concatenatedString.indexOf(strTwo) !== -1) {
        isRotation = true;
    }
}

if (isRotation) {
    console.log("The strings are rotations of each other.");
} else {
    console.log("The strings are not rotations of each other.");
}


// Question 10 
/* Write a program that counts the number of words in a given string. Use loops to iterate through the string and check for spaces or punctuation to separate words. */
let textString = prompt("Enter a string:");
let wordCount = 0;
let insideWord = false;

for (let i = 0; i < textString.length; i++) {
    if (textString[i] !== ' ' && !insideWord) {
        insideWord = true;
        wordCount++;
    } else if (textString[i] === ' ') {
        insideWord = false;
    }
}

console.log("Number of words:", wordCount);

// Question 11
/* Create a program that converts all lowercase letters in a string to uppercase and vice versa. Use loops and conditional statements to change the case of each character. */
let caseString = prompt("Enter a string:");
let convertedCaseString = "";

for (let i = 0; i < caseString.length; i++) {
    if (caseString[i] === caseString[i].toUpperCase()) {
        convertedCaseString += caseString[i].toLowerCase();
    } else {
        convertedCaseString += caseString[i].toUpperCase();
    }
}

console.log("Case-converted string:", convertedCaseString);


// Question 12
/* Write a program that counts the number of vowels (a, e, i, o, u) in a given string. Use a loop to iterate through the string and check for vowels. */
let inputVowelString = prompt("Enter a string:");
let vowelCount = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < inputVowelString.length; i++) {
    if (vowels.indexOf(inputVowelString[i]) !== -1) {
        vowelCount++;
    }
}

console.log("Number of vowels:", vowelCount);


// Question 13
/* Write a program that removes all instances of a specified character from a given string. Use a loop to build a new string without the specified character. */
let originalCharString = prompt("Enter a string:");
let charToRemove = prompt("Enter the character to remove:");
let resultString = "";

for (let i = 0; i < originalCharString.length; i++) {
    if (originalCharString[i] !== charToRemove) {
        resultString += originalCharString[i];
    }
}

console.log("String after removal:", resultString);


// Question 14 
/* Write a program that finds and prints all duplicate characters in a given string. Use loops and an object to track character occurrences. */
let duplicateCharString = prompt("Enter a string:");
let charOccurrences = {};
let duplicates = "";

for (let i = 0; i < duplicateCharString.length; i++) {
    let char = duplicateCharString[i];
    charOccurrences[char] = (charOccurrences[char] || 0) + 1;
}

for (let char in charOccurrences) {
    if (charOccurrences[char] > 1) {
        duplicates += char + " ";
    }
}

console.log("Duplicate characters:", duplicates.trim());


// Question 15
/* Write a program that finds the first non-repeating character in a string. Use loops and an object to track character counts and determine the first unique character. */
let uniqueCharString = prompt("Enter a string:");
let charCount_ = {};
let firstUnique = "";

for (let i = 0; i < uniqueCharString.length; i++) {
    let char = uniqueCharString[i];
    charCount_[char] = (charCount_[char] || 0) + 1;
}

for (let i = 0; i < uniqueCharString.length; i++) {
    if (charCount_[uniqueCharString[i]] === 1) {
        firstUnique = uniqueCharString[i];
        break;
    }
}

if (firstUnique) {
    console.log("First unique character:", firstUnique);
} else {
    console.log("No unique characters found.");
}
