/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, winningScore, name0, name1, diceEffect, effectNum;


function init() {

    alert("The rules are as follows: \n1.Player 1 rolls the die first. \n2.In each turn, each player rolls the die as many times as he wishes or until he/she rolls a 1. \n3. For each roll, the value of that roll is added to the current player's score. \n4. If the player rolls a 1, his/her turn is over, and the score he accumulated during his current roll is negated. \n5. If the player decides to hold, his current turn score is added to his total score. \n6. The first player to get to 100 points total wins!"); 

    name0 = prompt("Player 1, Enter your name: "); 
    name1 = prompt("Player 2, Enter your name: "); 

    winningScore = prompt("What would you like the winning score to be?");
    winningScore = parseInt(winningScore);  

    document.querySelector('#name-0').textContent = name0;
    document.querySelector('#name-1').textContent = name1; 

    scores = [0, 0]; 
    roundScore = 0; 
    activePlayer = 0;
    
    //Hiding the dice initially
    document.querySelector('.dice').style.display = 'none';

    //Setting initial scores to 0
    document.querySelector('#score-0').textContent = '0'; 
    document.querySelector('#score-1').textContent = '0'; 
    document.querySelector('#current-0').textContent = '0'; 
    document.querySelector('#current-1').textContent = '0';

    //document.querySelector('#name-0').textContent = 'Player 1';
    //document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active'); 
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active'); 
}
 
init(); 

//What happens when the roll dice button is clicked
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    
    //1. Random number
    if (document.querySelector('#name-' + activePlayer).textContent != 'WINNER!') {
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice');

        setTimeout(function() {
            effectNum = (Math.floor(Math.random() * 6)) + 1;
            diceDOM2.src = 'dice-' + effectNum + '.png';
        }, 300);

        setTimeout(function() {
            effectNum = (Math.floor(Math.random() * 6)) + 1;
            diceDOM2.src = 'dice-' + effectNum + '.png';
        }, 600);

        setTimeout(function() {
            effectNum = (Math.floor(Math.random() * 6)) + 1;
            diceDOM2.src = 'dice-' + effectNum + '.png';
        }, 900);
        
        setTimeout(function() {
            dice = (Math.floor(Math.random() * 6)) + 1;

            //2. Display the result 
            
            diceDOM.style.display = 'block'; 
            diceDOM.src = 'dice-' + dice + '.png'; 
            console.log(dice);
            
                //3. Update the round score IF the rolled number was NOT 1
            if (dice !== 1) {
                //Add score to player's global score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;

                if ((roundScore + scores[activePlayer]) === winningScore) {
                    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'; 
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] + roundScore;  
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    //document.querySelector('.dice').style.display = 'none'; 
                }

                if ((roundScore + scores[activePlayer]) > winningScore) {
                    switchPlayer(); 
                }

            }

            else {
                //Next player's turn
                if (1 + scores[activePlayer] === winningScore) {
                    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'; 
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] + 1;  
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    document.querySelector('#current-' + activePlayer).textContent = 1;
                }

                if (document.querySelector('#name-' + activePlayer).textContent != 'WINNER!')
                    switchPlayer(); 

                //document.querySelector('.dice').style.display = 'none';
            }

        }, 1200);

    }

    else {
        alert("Please Select New Game To Restart The Game."); 
    }
     
}); 

document.querySelector('.btn-hold').addEventListener('click', function() {
    //Add Current Score to Player's global score
    scores[activePlayer] += roundScore; 

    //Update the User Interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

    //Next player's turn
    switchPlayer(); 

    //Check if player won game
    
}); 

function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    
    //Setting scores to 0 if 1 is rolled 
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active');
}

//Resetting Values when the new game button is clicked
document.querySelector('.btn-new').addEventListener('click', init);

















