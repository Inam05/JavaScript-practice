// primitive data types in javaScript

fullName = "Inam Ul Hassan";     // string type variable contains all the characters value 
age = 21;   // integer type variable conatins the numeric value also include decimal value
price = 10.32;    // integer type variable conatins the numeric value also include decimal value
x = null;  // null variable contain nothing 
y = undefined;  // undefined variable contains if we don't initallize the variable 
isFollow = true;  // boolean data type to check the thing is true or false
let z = BigInt("123");
let d = Symbol("Hello!");
console.log(z); // 123n will be print on the console
console.log(d);  // Hello! will print on console
console.log(typeof fullName);  // typeof operator is used to check the type of variable
console.log(fullName); // to print something on the console
console.log(price);

// non-primitive data types in javaScript
/*
the collection of all primitive type data types in a block is said to be a object and object is said to be non primitive
generally the objects have to be declared from const type but they aslo be declared from let as your choice
in objects there are the pairs of key and value in it
to access key we wrote "obj.key  or   obj["key"]
*/

const person = {
    name: "Inam Ul Hassan",
    age: 21,    // age is a key while 21 is a value 
    isFollow: true,
    address: "Karachi",
    phone: "0321-1234567",
    email: "inamulhassan@gmail.com"
}
console.log(person.name); // to access the key value
person ["age"] = person ["age"] + 2 ;
console.log(person.age);
console.log(person);

/*
point to be noted
=> we didn't update the let defining variable
=> we didn't update the const defining variable
=> we update the object defining variable by const only their keys
*/

//NAN in js
console.log(10/0); // NaN will be print on the console
console.log(10/0.0); // NaN will be print on the console
console.log(typeof 10/0);