// functions in an array

function hello() {
    console.log("Hello");
}
hello();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

function isAdult() {
    let age = 18;
    let personAge = 25;
    if (personAge >= age) {
        console.log("You are an adult");
    }
    else {
        console.log("You are not an adult");
    }
}
isAdult();

