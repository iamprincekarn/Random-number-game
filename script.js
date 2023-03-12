let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audioOnLoad = new Audio('bg-music.mp3');
let audioOnClick = new Audio('onclick2.mp3');

const init = () => {
    // audioOnLoad.play();
    computerGuess = (Math.floor)(Math.random() * 100);
    console.log(computerGuess);
    document.getElementById("newGameButton").style.
        display = "none";
    document.getElementById("gameArea").style
        .display = "none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

const newGameBegin  = () =>{
    audioOnClick.play();
    window.location.reload();
};


const easyMode = () => {
    audioOnClick.play();
    maxGuess = 10;
    startGame();
};
const hardMode = () => {
    audioOnClick.play();
    maxGuess = 5;
    startGame();
};

const startNewGame = () =>{
    
    document.getElementById("newGameButton").style.
    display = "inline";
    userNumberUpdate.setAttribute('disabled', true);
}

const compareGuess = () => {
    let userNumber = (Number)(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is high";
            userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is low";
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = "It's correct";
            userNumberUpdate.value = "";
            startNewGame();
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You lose!, Correct number is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You lose!, Correct number is ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = "It's correct";
            userNumberUpdate.value = "";
            startNewGame();
        }

    }
    document.getElementById("attempts").innerHTML = userGuess.length;
};

