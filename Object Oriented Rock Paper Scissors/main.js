/*
TODO
- best out of 5 games wins.
*/
const readline = require('readline-sync');

const createPlayer = function() {
  return {
    move: null,

    choose() {
      const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      console.log('Please enter a number to choose:\n(1) Rock\n(2) Paper\n(3) Scissors\n(4) Lizard\n(5) Spock');
      let choice = Number(readline.question().trim());
      while (Number.isNaN(choice) || choice > 5 || choice < 1) {
        console.log('Please enter a valid number:\n(1) Rock\n(2) Paper\n(3) Scissors\n(4) Lizard\n(5) Spock');
        choice = Number(readline.question().trim());
      }
      this.move = options[choice - 1];
    },
  };
};

const createComputer = function() {
  return {
    move: null,

    choose() {
      const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIdx = Math.floor(Math.random() * options.length);
      this.move = options[randomIdx];
    }
  };
};

const RPSGame = {
  human: createPlayer(),
  computer: createComputer(),
  score: {round: 1, humanScore: 0, computerScore: 0},

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing. Goodbye!');
  },

  displayWinner() {
    const WINNING = { rock: {scissors: 1, lizard: 1},
      paper: {rock: 1, spock: 1}, scissors: {paper: 1, lizard: 1},
      lizard: {paper: 1, spock: 1}, spock: {scissors: 1, rock: 1},
    };
    const win = WINNING[this.human.move].hasOwnProperty(this.computer.move);
    const draw = this.human.move === this.computer.move;
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
    if (win) {
      this.score.humanScore += 1;
      console.log('You Win!');
    } else if (draw) {
      console.log('It\'s a tie.');
    } else {
      this.score.computerScore += 1;
      console.log('You Lose.');
    }
    this.score.round += 1;
  },

  displayScore() {
    console.log(`=> This is round ${this.score.round}`);
    console.log(`=> Player Score: ${this.score.humanScore}  Computer Score: ${this.score.computerScore}`);
  },

  playAgain() {
    console.log('Do you want to play again? ( Y / N )');
    let playMore = readline.question().toLowerCase();
    while (playMore !== 'y' && playMore !== 'n') {
      console.log('Please enter a valid choice. ( Y / N )');
      playMore = readline.question().toLowerCase();
    }
    return playMore === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.displayScore();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
};

RPSGame.play();