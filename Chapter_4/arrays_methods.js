/* 
Methods in arrays
push() - adds an element to the end of an array
pop() - removes the last element from an array
unshift() - adds an element to the beginning of an array
shift() - removes the first element from an array
splice() - removes elements from anywhere in an array and also adds new elements
slice() - returns a shallow copy of a portion of an array into a new array object selected
from start to end (not including end). The original array will not be modified.
concat() - joins two or more arrays and returns a new array.
sort() - sorts the elements of an array in place and returns the array.
reverse() - reverses the order of the elements of an array in place and returns the array
indexOf() - returns the first index at which a given element can be found in the array,
or -1 if it is not present. It compares searchElement using strict equality (===).
lastIndexOf() - returns the last index at which a given element can be found in the array
includes() - determines whether an array includes a certain value among its entries, returning true or false
map() - creates a new array with the results of calling a provided function on every element in
the calling array.
filter() - creates a new array with all elements that pass the test implemented by the provided function
reduce() - applies a function against an accumulator and each element in the array (from left to
right) to reduce it to a single value.
forEach() - executes a provided function once for each array element.
every() - tests whether all elements in the array pass the test implemented by the provided function.
some() - tests whether at least one element in the array passes the test implemented by the provided
function.
find() - returns the value of the first element in the provided array that satisfies the provided testing
function. If no values satisfy the testing function, undefined is returned.
findIndex() - returns the index of the first element in the provided array that satisfies the provided
testing function. If no values satisfy the testing function, -1 is returned.
*/

// push
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
arr.push(6);  // new element add at the end of the index of an array
console.log(arr); // [1, 2, 3, 4, 5, 6 ]
console.log(arr.length);

// pop
arr.pop(); // remove the last element of an array
console.log(arr); // [1, 2, 3, 4, 5 ]
console.log(arr.length); // 5

// unshift
arr.unshift(0); // add an element at the beginning of an array
console.log(arr); // [0, 1, 2, 3, 4,
console.log(arr.length); // 6

// shift
arr.shift(); // remove the first element of an array
console.log(arr); // [1, 2, 3, 4, 5 ]
console.log(arr.length); // 5

// splice
// splice() - removes elements from anywhere in an array and also adds new elements
// Syntax: array.splice(start, deleteCount, item1, item2, itemN)
arr.splice(0,2, 1, 27, 25);
console.log(arr); // [1, 27, 25 ]
console.log(arr.length); // 3

// slice
// slice() - extracts a section of an array and returns a new array
// Syntax: array.slice(start, end)
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3)); // [1, 2, 3]

// concat()
// Method: joins two or more arrays and returns a new array
// Syntax: array.concat(array2, array3, ..., arrayN)
let arr2 = [6, 7, 8];
let arrConcat = arr.concat(arr2); // Concatenates arr and arr2
console.log(arrConcat); // [1, 27, 25, 4, 5, 6, 7, 8]