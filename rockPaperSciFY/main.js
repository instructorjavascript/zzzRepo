var game = new game();
var userchoice = "";
var computerchoice = "";
var result = "";
var buttons = document.getElementsByClassName("button");
// consists of three buttons
var playerChoiceDisplay = document.getElementById("playerC");
var computerChoiceDisplay = document.getElementById("computerC");
var resultDisplay = document.getElementById("result");


function game() {
    this.computerInput = function() {
        this.computerchoice = Math.random();
        if (this.computerchoice < 0.34) {
            return this.computerchoice = "paper";
        } else if (this.computerchoice <= 0.67) {
            return this.computerchoice = "rock";
        } else {
            return this.computerchoice = "scissors";
        }

    }
    this.compare = function(choice1, choice2) {

    };
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            userChoice = this.id;
            playerChoiceDisplay.innerHTML = "player: " + userChoice;

            computerChoice = game.computerInput();
            computerChoiceDisplay.innerHTML = "computer: " + computerChoice;

            result = game.compare(userChoice, computerChoice);

            resultDisplay.innerHTML = "Result: " + result;
        }, false);
    }

}