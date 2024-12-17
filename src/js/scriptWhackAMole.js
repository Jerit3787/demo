$(document).ready(function () {
    let score = 0;
    var moles = $(".mole");
    var highScore = localStorage.getItem("highScore") ? localStorage.getItem("highScore") : 0;
    $("#highScore").text(`Highest Score: ${highScore}`);
    console.log(highScore);
    const gameDuration = 15000; //Game lasts for 15 seconds

    // Function to show a random mole
    function showRandomMole() {
        const randomIndex = Math.floor(Math.random() * moles.length);
        const randomMole = moles.eq(randomIndex); // Select a random mole

        $(randomMole).fadeIn(300);
        setTimeout(() => { $(randomMole).slideUp(300) }, 1000) // Transition random mole after 1s
    }
    // Event listener to "whack" the mole
    $(".mole").on("click", function () {
        $(this).css('background-color', 'red');
        setTimeout(() => { $(this).hide() }, 150); // Hide the mole immediately when clicked
        score += 10; // Increment score
        $("#score").text(`Score: ${score}`); // Update score display
    });

    // Start the game
    let gameInterval = setInterval(showRandomMole, 1000) // Show a mole every second

    // End the game after the duration
    setTimeout(() => {
        clearInterval(gameInterval); // Stop showing moles
        $(moles).hide();
        alert(`Game over! Your final score is: ${score}`);
        if (score > highScore) {
            localStorage.setItem("highScore", score);
            $("#highScore").text(`Highest Score: ${score}`);
        }
    }, gameDuration);
})