const txtbox = document.querySelector("status")
const btnRock = document.querySelector("rock")
const btnPaper = document.querySelector("paper")
const btnScissors = document.querySelector("scissors")


// Get the player's input based on the button clicked.
btnRock.addEventListener("click", judgeRound(0)) // ROCK
btnPaper.addEventListener("click", judgeRound(1)) // PAPER
btnScissors.addEventListener("click", judgeRound(2)) // SCISSORS


// Get the computer move, but do not reveal it to the player.
// Returns 0 for rock, 1 for paper, 2 for scissors.
function computerMove() {
    let randVal = Math.random();

    if (randVal <= 1/3) {
        console.log("Computer chose ROCK.")
        return 0;
    } else if (randVal <= 2/3) {
        console.log("Computer chose PAPER.")
        return 1;
    } else {
        console.log("Computer chose SCISSORS.")
        return 2;
    }
}


// 
function judgeRound(player) {
    const computer = parseInt(computerMove())
    player = parseInt(player)
    if (computer == player) {
        console.log("Tie! No points awarded.")
        return 0;
    }

    if (player < 2) {
        if (computer == player + 1) {
            console.log("Computer wins!")
            return -1;
        } else {
            console.log("Player wins!")
            return 1;
        }
    } else {
        if (computer == 0) {
            console.log("Computer wins!")
            return -1;
        } else {
            console.log("Player wins!")
            return 1;
        }
    }
}