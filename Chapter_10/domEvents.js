// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function () {
//     alert("Button clicked");
// }

// function sayHello () {
//     alert("Hello");
// }
// btn.onclick = sayHello;

// btn.addEventListener("click", function () {
//     console.log("button clicked");
// });


// // Activity 

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("Color updated");
// });

// function getRandomColor () {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }



// 'this' in Event Listeners
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    console.log(this.innerText);
    this.style.backgroundColor = "yellow";
});