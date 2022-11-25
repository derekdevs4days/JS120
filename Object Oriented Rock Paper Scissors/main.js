/*
*** STEP 1 ***
Write a textual description of the problem.

RPS is a two-player game where each player chooses one of three possible moves: rock, paper, or scissors. The winner is chosen by comparing their moves with the following rules:

- ROCK beats SCISSORS
- SCISSORS beats PAPER
- PAPER beats ROCK
- tie if same choice'

*** STEP 2 ***
Extract the significant nouns and verbs from description.

Nouns: player, move, rule.
Verbs: choose, compare

*** STEP 3 ***
Organize and associate the verbs with the nouns.
 
Player
 - choose
Move 
Rule

- compare
*/

const createPlayer = function(playerType) {
  return {
    playerType: playerType,

    choose() {
      if (this.isHuman()) {
        // do this
      } else {
        // do that
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },

  };
}

const createMove = function() {
  return {
    // possible state: type of move (rock, paper, scissors)
  };
}

const createRule = function() {
  return {
    // rules?
  };
}

const compare = function(move1, move2) {

};

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing. Goodbye!');
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  }
};

RPSGame.play();