// Question 1
/*  You are given a list of students, each with their scores in multiple subjects. Write a function that calculates the average score for each student. */
const studentList = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [79, 95, 88] },
    { name: "Charlie", scores: [92, 91, 85] }
];

function calculateAverages(studentList) {
    return studentList.map(student => {
        const totalScores = student.scores.reduce((acc, score) => acc + score, 0);
        const averageScore = totalScores / student.scores.length;
        return { name: student.name, average: averageScore.toFixed(2) };
    });
}

console.log(calculateAverages(studentList));

// Question 2
/* Write a function that takes a string of words and returns the longest word. */
const phrase = "The quick brown fox jumps over the lazy dog";

function findLongestWord(phrase) {
    const wordArray = phrase.split(" ");
    let longestWord = wordArray[0];

    for (let i = 1; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWord.length) {
            longestWord = wordArray[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord(phrase));

// Question 3
/* Given an array of numbers, write a function to create a new array that contains only the even numbers. */
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(numArray) {
    const evenArray = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            evenArray.push(numArray[i]);
        }
    }
    return evenArray;
}

console.log(filterEvenNumbers(numArray));


// Question 4
/* Write a function that counts the number of vowels in a given string. */
const message = "Hello, World!";

function countVowels(message) {
    const vowelList = "aeiouAEIOU";
    const charArray = message.split("");
    let vowelCount = 0;

    for (let i = 0; i < charArray.length; i++) {
        if (vowelList.includes(charArray[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

console.log(countVowels(message));


// Question 5
/* ou have a nested array of numbers. Write a function to flatten the array. */
const nestedNums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function flattenArray(nestedNums) {
    const flattenedArray = [];
    for (let i = 0; i < nestedNums.length; i++) {
        flattenedArray.push(...nestedNums[i]);
    }
    return flattenedArray;
}

console.log(flattenArray(nestedNums));


// Question 6 
/* Given an array of strings, find the string with the most characters. */
const fruits = ["apple", "banana", "cherry", "date"];

let longestString = fruits[0];

for (let i = 1; i < fruits.length; i++) {
    if (fruits[i].length > longestString.length) {
        longestString = fruits[i];
    }
}

console.log(longestString);


// Question 7 
/* Count the occurrences of each character in a string. */
const word = "character";

const charCount = {};
const wordArray = word.split("");

for (let i = 0; i < wordArray.length; i++) {
    const character = wordArray[i];
    if (charCount[character]) {
        charCount[character]++;
    } else {
        charCount[character] = 1;
    }
}

console.log(charCount);


// Question 8 
/* Sum all the numbers in a nested array. */
const nestedNumbers = [[1, 2], [3, 4], [5, 6]];

let totalSum = 0;

for (let i = 0; i < nestedNumbers.length; i++) {
    for (let j = 0; j < nestedNumbers[i].length; j++) {
        totalSum += nestedNumbers[i][j];
    }
}

console.log(totalSum);
