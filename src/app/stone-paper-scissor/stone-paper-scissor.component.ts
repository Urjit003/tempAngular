import { Component } from '@angular/core';

@Component({
  selector: 'app-stone-paper-scissor',
  template: `
    <div class="game">
      <h1>Stone-Paper-Scissors</h1>
      <p>{{ resultMessage }}</p>
      <div class="choices">
        <button (click)="playGame('stone')">Stone</button>
        <button (click)="playGame('paper')">Paper</button>
        <button (click)="playGame('scissors')">Scissors</button>
      </div>
      <div class="results">
        <p>Your Choice: {{ playerChoice || 'None' }}</p>
        <p>Computer's Choice: {{ computerChoice || 'None' }}</p>
      </div>
    </div>
  `,
  styles:`
  .game {
  text-align: center;
  margin: 20px auto;
}

.choices button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.results {
  margin-top: 20px;
  font-size: 18px;
}

  `,
  standalone: true
})
export class StonePaperScissorsComponent {
  choices = ['stone', 'paper', 'scissors'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  resultMessage = 'Make your move!';

  playGame(playerChoice: string) {
    this.playerChoice = playerChoice;
    this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];

    if (this.playerChoice === this.computerChoice) {
      this.resultMessage = "It's a tie!";
    } else if (
      (this.playerChoice === 'stone' && this.computerChoice === 'scissors') ||
      (this.playerChoice === 'paper' && this.computerChoice === 'stone') ||
      (this.playerChoice === 'scissors' && this.computerChoice === 'paper')
    ) {
      this.resultMessage = 'You win!';
    } else {
      this.resultMessage = 'You lose!';
    }
  }
}
