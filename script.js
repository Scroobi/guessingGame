
var possible = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var loss = 0;
var guesses = 10;
var used = [];

var computerGuess = possible[Math.floor(Math.random() * possible.length)];

function reset()
{
    computerGuess = possible[Math.floor(Math.random() * possible.length)];
    console.log(computerGuess);
}

document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        guesses = 10;
        used = [];
        reset();
    }

    reset();
    if (userGuess !== computerGuess) {
        guesses--;

    }
    if (guesses === 0) {
        loss++
        guesses = 10;
        used = [];
    }

    if (used.indexOf(userGuess) >= 0) {

    } else {
         
          used.push(userGuess);
          document.getElementById("userGuess").innerHTML = "Guessed so far: " + used;
          console.log(used);

    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + loss;
    document.getElementById("left").innerHTML = "Left: " + guesses;

}