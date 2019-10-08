var name = " Somebody to Love";

document.getElementById("outPut").innerHTML = namGen();

function namGen() {
    var alphabet = "A1B2C3D4E5F6G7H8I9J@K#L^M&NO*PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charList = alphabet.split("");

    for (var i = 0; i < charList.length; i++) {

        for (var j = i; j < charList.length; j++) {
            var hary = "";
            var valu1 = getRandomInt();
            var valu2 = getRandomInt();
            hary += alphabet[valu1] + alphabet[valu2];
            document.getElementById("outPut2").innerHTML = hary;
        }



    }

    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    _.each(alphabet, function(letter) {
        console.log(letter);
    });

}

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(55));
}

function getRandom() {
    return Math.floor(Math.random() * Math.floor(10));
}

namGen();