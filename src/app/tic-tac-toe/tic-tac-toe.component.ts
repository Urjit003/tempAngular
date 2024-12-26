import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tic-tac-toe',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./tic-tac-toe.component.css'],
  templateUrl: './tic-tac-toe.component.html',
  standalone :true ,
})
export class TicTacToeComponent {
  board!: string[][];
  currentPlayer!: string;
  gameOver!: boolean;
  winner!: string | null;

  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = null;
  }

  makeMove(row: number, col: number) {
    if (!this.gameOver && this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner()) {
        this.gameOver = true;
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] && 
        this.board[i][1] === this.board[i][2] && 
        this.board[i][0] !== ''
      ) {
        return true;
      }
      if (
        this.board[0][i] === this.board[1][i] && 
        this.board[1][i] === this.board[2][i] && 
        this.board[0][i] !== ''
      ) {
        return true;
      }
    }
    if (
      this.board[0][0] === this.board[1][1] && 
      this.board[1][1] === this.board[2][2] && 
      this.board[0][0] !== ''
    ) {
      return true;
    }
    if (
      this.board[0][2] === this.board[1][1] && 
      this.board[1][1] === this.board[2][0] && 
      this.board[0][2] !== ''
    ) {
      return true;
    }
    return false;
  }

  getGameStatus(): string {
    if (this.gameOver) {
      return this.winner ? `${this.winner} wins!` : 'It\'s a tie!';
    }
    return `Player ${this.currentPlayer}'s turn`;
  }
}
