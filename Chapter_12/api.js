// JSON parse
let jsonRes = '{"fact":"A cat has approximately 60 to 80 million olfactory cells (a human has between 5 and 20 million).","length":96}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);


// JSON stringify
let student = {
    name: "John",
    age: 20,
    uni: "superior",
};
let jsonStud = JSON.stringify(student);
console.log(jsonStud);

// API fetching
let url = "https://catfact.ninja/fact";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("data1 = ", data.fact);
        return fetch(url);
    })
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        console.log("data2 = ", data2.fact);
    })
    .catch((error) => {
        console.error(error);
    })


// API fetch through async and await keywords
async function getCatFact() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

        let res3 = await fetch(url);
        let data3 = await res3.json();
        console.log(data3.fact);
    } catch (e) {
        console.log(e);
    }

};
getCatFact();