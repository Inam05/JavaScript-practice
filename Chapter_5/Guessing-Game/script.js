document.getElementById("start-game").addEventListener("click", function () {
    const max = document.getElementById("max-number").value;
    if (max) {
        const random = Math.floor(Math.random() * max) + 1;
        document.getElementById("game-section").style.display = "block";
        document.getElementById("message").textContent = "Guess the number!";

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
});
