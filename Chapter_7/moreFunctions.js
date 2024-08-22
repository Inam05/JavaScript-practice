// use of "this"
const student1 = {
    name: 'John Doe',
    age: 20,
    eng: 45,
    math: 50,
    science: 60,
    getAvg() {
        console.log(this);
        let sum = (this.eng + this.math + this.science) / 3;
        console.log(`${this.name} got avg marks = ${getAvg}`);
    }
};

student1.getAvg();
function getAvg() {
    console.log(this);
};
getAvg();


// try & cath
try {
    let num = 10 / 0;
    console.log(num);
} catch (error) {
    console.log(error.message);
}
