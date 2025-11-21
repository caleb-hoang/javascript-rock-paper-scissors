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

function playerMove() {
    let response = prompt("Select ROCK, PAPER, or SCISSORS")

    if (response == "ROCK") {
        console.log("ROCK selected.")
        return 0;
    } else if (response == "PAPER") {
        console.log("PAPER selected.")
        return 1;
    } else if (response == "SCISSORS") {
        console.log("SCISSORS selected.")
        return 2;
    }

    console.log("Invalid input; ROCK selected by default.")
    return 0;
}

function judgeRound(computer, player) {
    computer = parseInt(computer)
    player = parseInt(player)
    if (computer == player) {
        console.log("Tie! No points awarded.")
        return 0;
    }

    if (player < 2) {
        if (computer == player + 1) {
            console.log("Computer wins! -1 point deducted.")
            return -1;
        } else {
            console.log("Player wins! +1 point awarded.")
            return 1;
        }
    } else {
        if (computer == 0) {
            console.log("Computer wins! -1 point deducted.")
            return -1;
        } else {
            console.log("Player wins! +1 point awarded.")
            return 1;
        }
    }
}

function playSet() {
    console.log("Let the games begin!")
    let score = 0

    for(let i = 0; i < 5; i++) {
        console.log("Current score is " + score)
        let player = playerMove()
        let computer = computerMove()
        score += judgeRound(computer, player);
    }
    
    console.log("All rounds complete!")
    judgeSet(score)

}

function judgeSet(score) {
    score = parseInt(score)
    console.log("Final score is " + score)
    if (score == 0) {
        console.log("Tie!")
    } else if (score > 0) {
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
}

playSet()