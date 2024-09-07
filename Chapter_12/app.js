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
        }, 1000);
    })
};

async function demo2() {
    await getNum();
    await getNum();
    getNum();
};
demo2();


// await keyword with changing color of H1

h1 = document.querySelector("h1");

function changeColor2(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Handling Reject
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 3) {
                reject();
            };


            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
};

async function demo3() {
    try {
        await changeColor2("red", 1000);
        await changeColor2("blue", 1000);
        await changeColor2("green", 1000);
        await changeColor2("purple", 1000);
    } catch(err){
        console.log("Error caught");
        console.log(err);
    }



    // Handling rejections
    let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
};

demo3();