// Question 1
/*
Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple
of 5 or not.
*/
let num = prompt("Enter a number:");
if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is not a multiple of 5");
}

// Question 2
/*
Write a code which can give grades to students according to their scores:
• 80-100, A
• 70-89, B
• 60-69, C
• 50-59, D
• 0-49, F
*/

let score = prompt("Enter your score:")
if (score >= 80 && score <= 100) {
    console.log("A");
} else if (score >= 70 && score <= 89) {
    console.log("B");
} else if (score >= 60 && score <= 69) {
    console.log("C");
} else if (score >= 50 && score <= 59) {
    console.log("D");
} else if (score >= 0 && score <= 49) {
    console.log("F");
} else {
    console.log("Invalid score");
}

// Question 3
/*
You are developing an online store. The store offers a 10% discount if the total purchase amount is 
more than $100. Additionally, if the customer is a premium member, they receive an additional 5% discount.
Write a JavaScript function that calculates the final price after applying the appropriate discounts.
*/

let total = parseFloat(prompt("Enter the total purchase amount:"));
let premium = prompt("Are you a premium member? (yes/no):");

if (total > 100) {
    if (premium === "yes") {
        console.log("Final price: ", total * 0.85); // 10% + 5% discount
    } else {
        console.log("Final price: ", total * 0.90); // 10% discount
    }
} else {
    if (premium === "yes") {
        console.log("Final price: ", total * 0.95); // 5% discount
    } else {
        console.log("Final price: ", total); // No discount
    }
}

// Question 3
/*
You are building a temperature converter that converts temperature from Celsius to Fahrenheit and vice versa. 
Write a JavaScript function that takes a temperature value and a unit ('C' for Celsius, 'F' for Fahrenheit) as 
inputs and returns the converted temperature.
*/
let temp = parseFloat(prompt("Enter the temperature:"));
let unit = prompt("Enter the unit (C/F):");

if (unit === "C") {
    console.log("Temperature in Fahrenheit: ", (temp * 9 / 5) + 32); // Convert Celsius to Fahrenheit
} else if (unit === "F") {
    console.log("Temperature in Celsius: ", (temp - 32) * 5 / 9); // Convert Fahrenheit to Celsius
} else {
    console.log("Invalid unit");
}
