const student = {
    name: 'John Doe',
    age: 20,
    eng : 45,
    math : 50,
    science : 60,
    getAvg (){
        let sum = (this.eng + this.math + this.science)/3;
        console.log(`${this.name} got avg marks = ${getAvg}`);
        console.log("inam");
    }
}