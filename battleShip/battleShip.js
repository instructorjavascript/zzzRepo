var randomloc = Math.floor(Math.random() * 5);
var loca1 = randomloc;
var loca2 = loca1 + 1;
var loca3 = loca2 + 1;

var guess;
var hit, guesses, isSunk;

hits = 0;
guesses = 0;

isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, AIM, Fire! (_enter a Number From 0-6_)");
    if (guess < 0 || guess > 6) {
        alert("Please enter A valid number, Only numbers from 0 to 6");
    } else {
        if (guess == loca1 || guess == loca2 || guess == loca3) {
            hits++;
            alert("you hiT MY SHIP")
            if (hits == 3) {
                isSunk = true;
                alert("You Sank My BattleShip");
            }
            guesses = guesses + 1;
        } else {
            alert(" You Missed !!")
            guesses = guesses + 1;
        }
    }

    var stats = "you took" + guesses + "guesses to sink my BattleShip," +
        " which means your shooting accuracy was " + (3 / guesses);
    alert(stats);

}