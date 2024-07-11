var fullName = "Inam Ul Hassan";
console.log (fullName);

// before 2015 we use let to define a variable but after 2015 ES6 updated this into let and const

let full_name = "Mark Zuker";
console.log(full_name);

// var example 
// a global scope variable
var age = 12;
var age = 14;
var age = 24;
console.log(age);  // var only print the updated value which have been contained by the variable in it


// let example
/*
"It is a block scope variable"
this is not be possible because let have not able to re-declare the variable again and again
let age = 12;
let age = 14;
let age = 24;
console.log(age);
*/  

// another authentic example of "let" key word example
let price = 29;
console.log(price);

// const example
/*
"It is a block scope variable"
this is not be possible because const have not able to re-declare the variable again and again
const price = 29;
const price = 14;
console.log(price);
*/
const FullName= "Mr.Ali";
console.log(FullName);

const PI = 3.14;
console.log(PI);

// point to be noted
let a ;
console.log(a); // undefined will be print on the console
a =10;
console.log(a); // 10 will be print on the console

// point to be noted
/*
const b; 
console.log(b); syntaxerror will be printed on the console 
=> so we must be value to the variable if we initialize or define with const variabl
*/

// block scope example 

{
    let a = 25;
    console.log(a); // 10 will be print on the console
}
{
    let a = 28;
    console.log (a);  // 25 will be print on the console
}

// console.log(a); // a is not defined error will be printed on the console
