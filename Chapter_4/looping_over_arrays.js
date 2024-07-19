// Arrays References
// Arrays are objects in JavaScript
console.log([1] == [1]);  // false because these are two different arrays in memory
// console.log([1] === [1]);  false for the same reason

let arr1 = ['a', 'b'];
let arr_2 = arr1;  // arr_2 references the same array as arr1
arr_2.push('c');   // Modifying arr_2 also modifies arr1
console.log(arr1); // Output: ['a', 'b', 'c'] because arr1 and arr_2 reference the same array
console.log(arr_2); // Output: ['a', 'b', 'c'] for the same reason

// constant arrays
const g = 10;
// g = 9.8; TypeError: Assignment to constant variable.
const a =[1,2,3];
a.push(4);
console.log(a); // we can push the elements in a constant arrays
