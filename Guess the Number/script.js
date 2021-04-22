// initialize a list store our guesses
let guessList = [];

//function to generate random number
function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*100)+1;
    return randomNumber;
}

//initialize a variable to store the random number generted.
let correctNumber = getRandomNumber();

//functions that take place on loading the website
window.onload = function(){
    document.getElementById('number-submit').addEventListener('click', playGame);
    document.getElementById('restart-game').addEventListener('click',initGame);
}

//function to play the game
function playGame(){
    let numberGuess = document.getElementById('number-guess').value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

//function to display result
function displayResult(numberGuess){
    if(correctNumber < numberGuess){
        showNumberAbove();
    }
    else if(correctNumber > numberGuess){
        showNumberBelow();
    }
    else{
        showYouWon();
    }
}

//You won function
function showYouWon(){
    const text = "Awesome job, you got it!";

    let dialog = getDialog('won', text);
    console.log(dialog);
    document.getElementById('result').innerHTML = dialog;
}


//Yoy guessed high function
function showNumberAbove(){
    const text = "Your guess is too high!"


    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

//you guessed low function
function showNumberBelow(){
    const text = "Your guess is too low!"

    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

//function to save the history
function saveGuessHistory(guess){
    guessList.push(guess);
    
}

function displayHistory(){
    let index = guessList.length -1;

    let list = "<ul class='list-group'>";

    while(index >= 0){
        list += "<li class='list-group-item'>" +
        "You guessed " + guessList[index] + "</li>"
        index-=1;
    }

    list += "</ul>";
    console.log(guessList);
    document.getElementById('history').innerHTML = list;
}

//To generate the text result according to our guess
function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case 'warning':
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case 'won':
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

//function to restart the game
function initGame(){
    correctNumber = getRandomNumber();
    document.getElementById('result').innerHTML = "";
    guessList = [];
    displayHistory();
}
