import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { PalindromeComponent } from "./palindrome/palindrome.component";
import { ChessBoarddComponent } from "./chess-boardd/chess-boardd.component";
import { TicTacToeComponent } from "./tic-tac-toe/tic-tac-toe.component";
import { StonePaperScissorsComponent } from "./stone-paper-scissor/stone-paper-scissor.component";
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, UserComponentComponent, PalindromeComponent, ChessBoarddComponent, TicTacToeComponent, StonePaperScissorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial-app';
}
