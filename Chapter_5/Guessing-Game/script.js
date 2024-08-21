document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("guess-button").addEventListener("click", makeGuess);
document.getElementById("quit-button").addEventListener("click", quitGame);

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const gameSection = document.getElementById("game-section");
        if (gameSection.style.display === "none") {
            startGame();
        } else {
            makeGuess();
        }
    }
});

function startGame() {
    const max = document.getElementById("max-number").value;
    if (max) {
        const random = Math.floor(Math.random() * max) + 1;
        document.getElementById("game-section").style.display = "block";
        document.getElementById("message").textContent = "Guess the number!";
        document.getElementById("guess-input").focus();

        document.getElementById("guess-button").addEventListener("click", function () {
            let guess = document.getElementById("guess-input").value;
            if (guess == random) {
                document.getElementById("message").textContent = "You won! Random number was " + random;
            } else if (guess < random) {
                document.getElementById("message").textContent = "Hint: Your guess was too small. Please try again!";
            } else if (guess > random) {
                document.getElementById("message").textContent = "Hint: Your guess was too big. Please try again!";
            }
        });

        document.getElementById("quit-button").addEventListener("click", function () {
            document.getElementById("message").textContent = "User quit";
            document.getElementById("game-section").style.display = "none";
        });
    } else {
        alert("Please enter a valid max number");
    }
}

function makeGuess() {
    let guess = document.getElementById("guess-input").value;
    if (guess) {
        let random = Math.floor(Math.random() * document.getElementById("max-number").value) + 1;
        if (guess == random) {
            document.getElementById("message").textContent = "You won! Random number was " + random;
        } else if (guess < random) {
            document.getElementById("message").textContent = "Hint: Your guess was too small. Please try again!";
        } else if (guess > random) {
            document.getElementById("message").textContent = "Hint: Your guess was too big. Please try again!";
        }
    }
}

function quitGame() {
    document.getElementById("message").textContent = "User quit";
    document.getElementById("game-section").style.display = "none";
}
