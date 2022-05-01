const playerOneScore = document.querySelector('#scorePlayerOne');
const playerTwoScore = document.querySelector('#scorePlayerTwo');
const matchWin = document.querySelector('#matchWin');
const btnPlayerOne = document.querySelector('#btnPlayerOne');
const btnPlayerTwo = document.querySelector('#btnPlayerTwo');
const btnReset = document.querySelector('#btnReset');
const form = document.querySelector('#scoreForm');
const span = document.querySelectorAll('span');

let scoreOne = 0;
let scoreTwo = 0;
let winningScore = 3;
let isGameOver = false;

btnPlayerOne.addEventListener('click', () => {
    if (!isGameOver) {
        scoreOne++
        if (scoreOne === winningScore) {
            isGameOver = true;
            playerOneScore.classList.add('has-text-success');
            playerTwoScore.classList.add('has-text-danger');
            btnPlayerOne.disabled = true;
            btnPlayerTwo.disabled = true;
        }
    }
    playerOneScore.textContent = scoreOne;
})

btnPlayerTwo.addEventListener('click', () => {
    if (!isGameOver) {
        scoreTwo++
        if (scoreTwo === winningScore) {
            isGameOver = true;
            playerTwoScore.classList.add('has-text-success');
            playerOneScore.classList.add('has-text-danger');
            btnPlayerOne.disabled = true;
            btnPlayerTwo.disabled = true;
        }
    }
    playerTwoScore.textContent = scoreTwo;
})

matchWin.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

btnReset.addEventListener('click', reset)

function reset() {
    scoreOne = 0;
    scoreTwo = 0;
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerTwoScore.classList.remove('has-text-success', 'has-text-danger');
    playerOneScore.classList.remove('has-text-success', 'has-text-danger');
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disabled = false;
    isGameOver = false;
}