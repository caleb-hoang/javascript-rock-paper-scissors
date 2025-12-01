const txtbox = document.querySelector("#status")
const results = document.querySelector("#results")
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")


let pscore = 0 // player score
let cscore = 0 // computer score

// Get the player's input based on the button clicked.
btnRock.addEventListener("click", function(){playRound(0)}) // ROCK
btnPaper.addEventListener("click", function(){playRound(1)}) // PAPER
btnScissors.addEventListener("click", function(){playRound(2)}) // SCISSORS


// Get the computer move, but do not reveal it to the player.
// Returns 0 for rock, 1 for paper, 2 for scissors.
function computerMove() {
    let randVal = Math.random();

    if (randVal <= 1/3) {
        txtbox.textContent="Computer chose ROCK."
        return 0;
    } else if (randVal <= 2/3) {
        txtbox.textContent="Computer chose PAPER."
        return 1;
    } else {
        txtbox.textContent="Computer chose SCISSORS."
        return 2;
    }
}

function playRound(player) {
    if (cscore + pscore < 5) {

        // play a round
        let point = judgeRound(player)
        let resultString = ""
        if (point == 0) {
            resultString = resultString + "Tie! No points awarded."
        } else if (point == 1) {
            resultString = resultString +  "Player wins!"
            pscore ++
        } else if (point == -1) {
            resultString = resultString +  "Computer wins!"
            cscore ++
        }

        // display score

        resultString = resultString +  " Score: (" + pscore + "-" + cscore + ")."

        if (pscore + cscore == 5) {
            if (pscore == 3) {
                resultString = resultString + " Player wins the set!"
            }

            if (cscore == 3) {
                resultString = resultString + " Computer wins the set!"
            }
        }



        results.textContent = resultString + ""
        console.log(resultString)
    }
    
}


// If the game has not yet ended, play out a round using the player's choice.
function judgeRound(player) {
    const computer = parseInt(computerMove())
    player = parseInt(player)
    if (computer == player) {
        return 0;
    }

    if (player < 2) {
        if (computer == player + 1) {
            return -1;
        } else {
            return 1;
        }
    } else {
        if (computer == 0) {
            return -1;
        } else {
            return 1;
        }
    }
}