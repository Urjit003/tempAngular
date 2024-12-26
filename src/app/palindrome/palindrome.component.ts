import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindrome',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h3>Palindrome Checker</h3>
    <input type="text" [(ngModel)]="input" placeholder="Enter a word" />
    <button (click)="checkPalindrome()">Check</button>

    <div *ngIf="isPalindrome !== null">
      <p *ngIf="isPalindrome">✔ "{{ input }}" is a Palindrome.</p>
      <p *ngIf="!isPalindrome">❌ "{{ input }}" is not a Palindrome.</p>
    </div>
  `,
  styles: ``,
})
export class PalindromeComponent {
  input: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const reversed = this.input.split('').reverse().join('');
    this.isPalindrome = this.input === reversed;
  }
}
