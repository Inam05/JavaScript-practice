// async keywords
async function greet() {
    throw "404 eror/week connection";
    console.log('Hello');
}
greet()
    .then((reult) => {
        console.log("promise was resolved");
    })
    .catch((err) => {
        console.log("promise was rejected");
    });

let demo = async () => {
    return 5;
};