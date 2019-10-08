// Placeholder id  = "helper"
var name = "JavaScript Class 2019 Wooo"
document.getElementById("helper").innerHTML = name;

function shareDATE(datePassed) {
    document.getElementById("date2").innerHTML = datePassed;
    document.getElementById("date3").innerHTML = datePassed;
}

function getDATE() {
    var dateNow = new Date();
    document.getElementById("make").innerHTML = dateNow;
    shareDATE(dateNow);
}

function spellNames() {
    var alphaBet = "0123456789!#@$%&*^_abcdefghijklmnopqrstuvwxyz!#@$%&*^_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var alphaBetBox = "";
    var passwordLength = document.getElementById("passlength").value;

    for (i = 0; i < passwordLength; i++) {
        var n1 = getRandomInt();
        alphaBetBox += alphaBet.charAt(n1 + 3);
        console.log(alphaBetBox);
    }

    document.getElementById("passgen").innerHTML = alphaBetBox;

}

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(75));
}

function saveStuff() {

    return "GoodBye World" + (1 + 1)
}
var dog = saveStuff();
document.getElementById("sStuff").innerHTML = dog;