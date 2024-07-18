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
console.log(arrConcat); // [1, 2, 3, 4, 5, 6, 7, 8]

// sort()
// Method: sorts the elements of an array in place and returns the array
// Syntax: array.sort(compareFunction)
let arr3 = [5, 2, 8, 1, 4];
arr3.sort(); // Sorts arr3 in ascending order (default behavior)
console.log(arr3); // [1, 2, 4, 5, 8]

// reverse()
// Method: reverses the order of the elements of an array in place and returns the array
// Syntax: array.reverse()
arr3.reverse(); // Reverses the order of elements in arr3
console.log(arr3); // [8, 5, 4, 2, 1]

// indexOf()
// Method: returns the first index at which a given element can be found in the array,
// or -1 if it is not present. It compares searchElement using strict equality (===).
// Syntax: array.indexOf(searchElement, fromIndex)
console.log(arr3.indexOf(4)); // Returns the index of the first occurrence of 4: 2
console.log(arr3.indexOf(25)); // returns -1 index because it is not include in the array

// lastIndexOf()
// Method: returns the last index at which a given element can be found in the array
// Syntax: array.lastIndexOf(searchElement, fromIndex)
arr3.push(4); // Adding another 4
console.log(arr3.lastIndexOf(4)); // Returns the index of the last occurrence of 4: 5

// includes()
// Method: determines whether an array includes a certain value among its entries, returning true or false
// Syntax: array.includes(searchElement, fromIndex)
console.log(arr3.includes(3)); // Checks if 3 is in arr3: false

// map()
// Method: creates a new array with the results of calling a provided function on every element in the calling array.
// Syntax: array.map(callback(currentValue, index, array), thisArg)
let doubled = arr3.map(num => num * 2); // Doubles each element in arr3
console.log(doubled); // [16, 10, 8, 4, 2]

// filter()
// Method: creates a new array with all elements that pass the test implemented by the provided function
// Syntax: array.filter(callback(element, index, array), thisArg)
let filtered = arr3.filter(num => num > 4); // Filters elements greater than 4
console.log(filtered); // [8, 5]