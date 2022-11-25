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

const createPlayer = function() {
  return {
    // player name?
    // player's current move?
    choose() {
      // not yet implemented
    }
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
  human: createPlayer(),
  computer: createPlayer(),


  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  }
};