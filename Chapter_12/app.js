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


// await keyword
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000);
    })
};

async function demo2() {
    await getNum();
    await getNum();
    getNum();
};
demo2();