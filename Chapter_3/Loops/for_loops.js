// loops are used to execute a piece of code again and again
// there are 3 types of loops in javaScript
// 1. for loop
// 2. while loop
// 3. do while loop
// for loop
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

for (let i = 1; i <= 5; i++) {
    console.log("Inam Ul Hassan");  // 5 time execute 
}

// sum in for loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum = ", sum); // 1 + 2 + 3 + 4 + 5

// how for loop is working 
for (let i = 1; i <= 5; i++) {
    console.log("i =", i);  // 5 time execute
}

// if we use var as a defining of "i" it will survive and print 6 after the block
// for (var i = 1; i <= 5; i++) {
//     console.log("i =",i );    5 time execute
// }
// console.log(i);  print 6 

// infinite loop
// A loop never ends


// for-of loop
// for (variable of iterable) {
//     // code to be executed
// }


let str = "Inam Ul Hassan";
for (let i of str) {  // iterator
    console.log("i = ", i); // print each character of string
}

// check string size through for-of loop
let str_ = "Inam Ul Hassan";
let size = 0;
for (let i of str_) {
    size = size + 1;
}
console.log("size = ", size); // print 14