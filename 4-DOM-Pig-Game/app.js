/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//sets dice display property to none
document.querySelector('.dice').style.display = 'none';

//set score text to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

//Events: Notifications that are sent to notify the code that something happened on the webpage.
//Examples: clicking a button, resizing a window, scrolling down, or pressing a key.
//Event listener: A function that performs an action based on a certain event. It waits for a specific event to happen.
/*
function btn() {
  //Do something here
}
*/
//btn is the callback function(a function that is called by another function)
//document.querySelector('.btn-roll').addEventListener('click', btn);

//In place of button could be function(), which would be an anonymous function - a function that doesn't have a name)
//In this scenario it is better to use an anonymous function

document.querySelector('.btn-roll').addEventListener('click', function() {
  //1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;
  //console.log(dice);

  //2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png'

  //3. Update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {
    //add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //next player
    //ternery operator example
      //if activePlayer is equal to 0, then activePlayer equals 1
      //else activePlayer = 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    //alternative way to add and remove
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //when one player rolls a 1 we want to hide the dice again
    document.querySelector('.dice').style.display = 'none';
  }
});
