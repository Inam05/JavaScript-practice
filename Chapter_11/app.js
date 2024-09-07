// call back hell 

h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});


// Database through call back hell 

// h2 = document.querySelector("h2");
function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
};
savetoDb(
    "apna college",
    () => {
        console.log("success: your data was saved");
        savetoDb(
            "hello world",
            () => {
                console.log("success2: data2 saved");
                savetoDb("inam", () => {
                    console.log("success3: data3 saved")
                }, () => {
                    console.log("failure3: data3 failed");
                })
            },
            () => {
                console.log("failure2: weak connection");
            }
        );
    },
    () => {
        console.log("failure: weak connection. data not saved");
    }
);


// Database through promises 

function savetoDb2(data) {
    return new Promise(((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success data was saved");
        } else {
            reject("failure weak connection");
        }
    }));
};

savetoDb2("inam")
    .then(() => {
        console.log("promise true: data was saved");
    })
    .catch(() => {
        console.log("promise false: weak connection");
    });

// through promise chain 

function savetoDb3(data) {
    return new Promise(((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success data was saved");
        } else {
            reject("failure weak connection");
        }
    }));
};

savetoDb3("ianm")
    .then(() => {
        console.log("promise chain true: data was saved");
        return savetoDb3("me");
    })
    .then(() => {
        console.log("promise chain true: data was saved");
    })
    .catch(() => {
        console.log("promise chain false: weak connection");
    });