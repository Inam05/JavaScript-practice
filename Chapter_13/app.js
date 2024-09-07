let btn = document.querySelector("button");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async () => {
    let fact = await getCatFact();
    console.log(fact);
    let p = document.querySelector("#fact");
    p.innerText = fact;
});

async function getCatFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact; // Return the fetched fact
    } catch (e) {
        console.log(e);
        return "No fact found!";
    }
}