// Arrays
/*
linear collection of things
1. Array literal
2. Array constructor
3. Array.from()
4. Array.of()
5. Array.isArray() - checks if it's an array
6. Array methods - forEach, map, filter, reduce, find, findIndex,
7. Array destructuring - [a, b] = [1, 2]
8. Array spread - [...arr]
9. Array includes - arr.includes(1) - checks if it's in the array
10. Array findIndex - arr.findIndex(x => x === 1) - returns the
index of the first element that matches the condition
11. Array find - arr.find(x => x === 1) - returns the first
element that matches the condition
12. Array filter - arr.filter(x => x === 1) - returns an array
of all the elements that match the condition
13. Array map - arr.map(x => x * 2) - returns an array
14. Array reduce - arr.reduce((acc, x) => acc + x,
0) - returns a single value
15. Array every - arr.every(x => x > 0) - checks if every
element in the array matches the condition
16. Array some - arr.some(x => x > 0) - checks if any
element in the array matches the condition
17. Array sort - arr.sort((a, b) => a - b) -
18. Array reverse - arr.reverse() - reverses the array
19. Array push - arr.push(1) - adds an element to the end of
the array
20. Array pop - arr.pop() - removes the last element from the
array
*/
let Students = [
    'inam','ukasha','kinza'
];
console.log(Students);
console.log(Students[1]);

let info = ['inam',19 , 3.85];
let marks = [99 ,89, 23];
console.log(info[0][2]); // to access the strings in an array
console.log(info);
console.log(marks.length); // to check the length of an array
console.log(info[0].length); // to access the length of a string through an array 

// Arays are mutable
marks[0] = 'inam'; // to change the specific thing at any part of an original array 
console.log(marks); 
marks[10] = "2024";
console.log(marks); // to add a new thing at the end of an array

// Array refrences
let array = ['a','b','c'];
let aarCopy;
array == aarCopy;  // return true because we change at the same array functionality
array === aarCopy; // this also return true
// push and pop concepts in arrays through array references
array.push('d');
console.log(array);
console.log(aarCopy); // ['a','b','c','d']  same as it in the array
aarCopy.pop();
console.log(array); // ['a','b','c']  same as it in the array copy
console.log(aarCopy);

// constant arrays
const a = [1,2,3,4,5];
a.push(6);
console.log(a); // 6 will be add in the constant array
a.pop();
console.log(a); // 6 will be remove in the constant array
