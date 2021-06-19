const player1Button = document.querySelector('#p1Button');
const player2Button = document.querySelector('#p2Button');
const player1Score = document.querySelector('#player1S');
const player2Score = document.querySelector('#player2S');
const resetButton = document.querySelector('#resetB');
const scroeSelect = document.querySelector('#playto');



let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameover = false;


player1Button.addEventListener('click', function () {
    // alert("hey")
    if (!isGameover) { //if we not finsh the game then add the player 1 score in the display
        // if we dont have the scroe uptill the winning score which is 5 till then run the loop
        p1Score += 1;
        if (p1Score === winningScore) {         // once we get number same to winning score then make gameover true and stop adding no's 
            isGameover = true;
            player1Score.classList.add('has-text-success');             // has-text-success -  bulma 
            player2Score.classList.add('loser');
            player1Button.disabled = true;
            player2Button.disabled = true;
            startit();
            stopit();
        }
        player1S.textContent = p1Score;         //if we click we add one to the p1score and update it to player1S
    }
})

player2Button.addEventListener('click', function () {
    // alert("hey")
    if (!isGameover) {
        p2Score += 1;
        if (p2Score === winningScore) {                // if we dont have the scroe uptill the winning score which is 5 till then run the loop
            isGameover = true;
            player2Score.classList.add('has-text-success');
            player1Score.classList.add('loser');
            player1Button.disabled = true;
            player2Button.disabled = true;
            startit();
            stopit();
        }
        player2S.textContent = p2Score;         //if we click we add one to the p1score and update it to player1S
    }
})

scroeSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})





resetButton.addEventListener('click', reset)


function reset() {
    isGameover = false;
    p1Score = 0;
    p2Score = 0;
    player1S.textContent = 0;
    player2S.textContent = 0;
    player1Score.classList.remove('has-text-success', 'loser');
    player2Score.classList.remove('has-text-success', 'loser');
    player1Button.disabled = false;
    player2Button.disabled = false;
}

const startit = () => {
    setTimeout(function () {
        console.log("start")
        confetti.start();
    }, 5)
}

const stopit = () => {
    setTimeout(function () {
        console.log("start")
        confetti.stop();
    }, 4000)
}
