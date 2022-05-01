const p1 = {
    score: 0,
    button: document.querySelector('#btnPlayerOne'),
    display: document.querySelector('#scorePlayerOne')
}

const p2 = {
    score: 0,
    button: document.querySelector('#btnPlayerTwo'),
    display: document.querySelector('#scorePlayerTwo')
}

const matchWin = document.querySelector('#matchWin');
const btnReset = document.querySelector('#btnReset');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}



p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})

matchWin.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

btnReset.addEventListener('click', reset)

function reset() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
    isGameOver = false;
}