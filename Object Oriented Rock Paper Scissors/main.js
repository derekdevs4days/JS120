/* eslint-disable max-lines-per-function */
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
      console.log('=> Please enter a number to choose:\n(1) Rock\n(2) Paper\n(3) Scissors\n(4) Lizard\n(5) Spock');
      let choice = Number(readline.question().trim());
      while (Number.isNaN(choice) || choice > 5 || choice < 1) {
        console.log('=> Please enter a valid number:\n(1) Rock\n(2) Paper\n(3) Scissors\n(4) Lizard\n(5) Spock');
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
    console.log('=> Welcome to Rock, Paper, Scissors!');
    console.log('=> Win 3 out 5 games to win!');
    console.log(`=> This is round ${this.score.round}`);
  },

  displayGoodbyeMessage() {
    console.log('=> Thanks for playing. Goodbye!');
  },

  displayWinner() {
    const WINNING = { rock: {scissors: 1, lizard: 1},
      paper: {rock: 1, spock: 1}, scissors: {paper: 1, lizard: 1},
      lizard: {paper: 1, spock: 1}, spock: {scissors: 1, rock: 1},
    };
    const win = WINNING[this.human.move].hasOwnProperty(this.computer.move);
    const draw = this.human.move === this.computer.move;
    console.log(`=> You chose: ${this.human.move}`);
    console.log(`=> The computer chose: ${this.computer.move}`);
    if (win) {
      this.score.humanScore += 1;
      console.log('=> You won this round!');
    } else if (draw) {
      console.log('=> It\'s a tie.');
    } else {
      this.score.computerScore += 1;
      console.log('=> You lost this round.');
    }
    this.score.round += 1;
  },

  displayScore() {
    console.log(`=> Round: ${this.score.round}`);
    console.log(`=> Player Score: ${this.score.humanScore}  Computer Score: ${this.score.computerScore}`);
  },

  playAgain() {
    console.log('=> Do you want to play again? ( Y / N )');
    let playMore = readline.question().toLowerCase();
    while (playMore !== 'y' && playMore !== 'n') {
      console.log('=> Please enter a valid choice. ( Y / N )');
      playMore = readline.question().toLowerCase();
    }
    this.score = {round: 1, humanScore: 0, computerScore: 0};
    return playMore === 'y';
  },

  // eslint-disable-next-line max-statements
  finalWin() {
    const win = `=> You won! You have ${this.score.humanScore} points and the computer has ${this.score.computerScore} points.`;
    const lose = `=> You lost. You have ${this.score.humanScore} points and the computer has ${this.score.computerScore} points.`;
    const tie =  `=> It's a tie. You have ${this.score.humanScore} points and the computer has ${this.score.computerScore} points.`;

    if (this.score.humanScore > 3) {
      console.log(win);
      return true;
    }
    if (this.score.computerScore > 3) {
      console.log(lose);
      return true;
    }

    if (this.score.round === 5) {
      if (this.score.computerScore === this.score.humanScore) {
        console.log(tie);
        return true;
      } else if (this.score.humanScore > this.score.computerScore) {
        console.log(win);
        return true;
      } else {
        console.log(lose);
        return true;
      }
    }
    return false;
  },

  delayClear() {
    const start = Date.now();
    let end = Date.now();
    while (end - start < 10000) {
      end = Date.now();
    }
    console.clear();
  },

  play() {
    while (true) {
      this.displayWelcomeMessage();
      while (true) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
        this.displayScore();
        this.delayClear();
        if (this.finalWin()) break;
      }
      if (!this.playAgain()) break;
      this.displayGoodbyeMessage();
    }
  }
};

RPSGame.play();