// Question 1
/* Write a for loop to calculate the sum of numbers from 1 to 100. */
let totalSum = 0;
for (let num = 1; num <= 100; num++) {
    totalSum += num;
}
console.log(totalSum); // Outputs 5050

// Question 2
/* Write a while loop to print all even numbers from 0 to 20. */
let counter = 0;
while (counter <= 20) {
    if (counter % 2 === 0) {
        console.log(counter);
    }
    counter++;
}

// Question 3
/* Given the array arr = ['a', 'b', 'c', 'd'], use a for-in loop to print all indices of the array. */
const lettersArray = ['a', 'b', 'c', 'd'];
for (const idx in lettersArray) {
    console.log(idx);
}

// Question 4
/* Given the array arr = [10, 20, 30, 40], use a for-of loop to print all values in the array. */
const numbersArray = [10, 20, 30, 40];
for (const val of numbersArray) {
    console.log(val);
}

// Question 5
/* Write a for loop to print the multiplication table of 5 up to 5 x 10. */
for (let multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(`5 x ${multiplier} = ${5 * multiplier}`);
}

// Question 6
/* Write a while loop to calculate the factorial of 6. */
let factorialNum = 6;
let factorialResult = 1;
while (factorialNum > 0) {
    factorialResult *= factorialNum;
    factorialNum--;
}
console.log(factorialResult); // Outputs 720

// Question 7 
/* Given the array arr = [1, 2, 3, 4], use a for-in loop to calculate the sum of all indices. */
const indexArray = [1, 2, 3, 4];
let sumOfIndices = 0;
for (const idx in indexArray) {
    sumOfIndices += parseInt(idx);
}
console.log(sumOfIndices); // Outputs 6

// Question 8 
/* Given the array arr = [1, 2, 3, 4], use a for-of loop to calculate the sum of all values. */

// Question 9
/* Write a for loop to reverse the string str = 'hello'. */