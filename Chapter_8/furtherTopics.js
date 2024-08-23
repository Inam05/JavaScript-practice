// Array Methods
// 1. forEach
// 2. map
// 3. filter
// 4. reduce
// 5. some
// 6. every
// 7. find

// forEach
// The forEach() method calls a function once for each array element.
// Syntax: arr.forEach(callback(currentValue, index, array) { });
// Example:
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(myFunction);
function myFunction(item, index, array) {
    console.log(item + " " + index + " " + array);
};
let arr = [1, 2, 3, 4, 5];
let print = function (el) {
    console.log(el);
};

arr.forEach(print);
console.log("Through simple function:-");
arr.forEach(function (el) {
    console.log(el);
});

let arr1 = [{
    name: "Inam",
    marks: 86,
},
{
    name: "Ukasha",
    marks: 85.5,
},
{
    name: "Me",
    marks: 85,
}];
arr1.forEach((student)=>{
    console.log(student.marks);
});