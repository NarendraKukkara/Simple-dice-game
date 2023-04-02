function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var total = dice1 + dice2;
    if (total === 7) {
        document.getElementById("result").innerHTML = "You rolled " + dice1 + " and " + dice2 + ". " + "You win!";
        document.getElementById("result").style.color = "green";
      } else {
        document.getElementById("result").innerHTML = "You rolled " + dice1 + " and " + dice2 + ". " + "You lose!";
        document.getElementById("result").style.color = "red";
      }
  }
  const diceRollSound = new Audio('dice_sound.wav');
  const rollButton = document.querySelector('#roll-button');
  rollButton.addEventListener('click', function() {
    diceRollSound.play();
});