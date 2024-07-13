// string is a sequence of characters used to represent text

let str = "Inam Ul Hassan";

// inbuit properties
// length property
console.log(str.length); // 14
// string indicies
console.log(str[0]); // I
console.log(str[1]); // n
console.log(str[2]); // a
console.log(str[3]); // m

// TEMPLATE LITERALS 
// template literals are enclosed in backticks(`) instead of quotes
// template literals can contain placeholders
// placeholders are enclosed in ${} and can be used to insert variables or expressions
// template literals can be used to create multi-line strings

let sentence = `This is a template literal`;
console.log(sentence); // This is a template literal

let obj = {
    item: 'pen',
    price: 10,
};
let sentence2 = `The ${obj.item} costs ${obj.price}`
console.log(sentence2); // The pen costs 10

// escape characters
// escape characters are used to insert special characters into a string
// they are preceded by a backslash (\)
// some common escape characters are \n for new line, \t for tab,
// \r for carriage return, \b for backspace, \f for form feed,
// \v for vertical tab, \\" for double quote, \\ for backslash
// \uXXXX for unicode character, \xXX for hexadecimal character

console.log("Inam Ul Hassan \nAge = 20");
console.log("Inam Ul Hassan \tAge = 20");
let str_ = "Inam Ul Hassan \tAge = 20";
console.log(str_.length); // Inam Ul Hassan	 Age = 20