import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pyramid',
  imports:[FormsModule,CommonModule],
  template: `
    <div class="pyramid-container">
      <h1>Pyramid Pattern Generator</h1>
      <label for="rows">Enter the number of rows: </label>
      <input id="rows" type="number" [(ngModel)]="rows" min="1" (input)="generatePyramid()" />

      <div *ngIf="pyramid.length > 0" class="pyramid">
        <div *ngFor="let line of pyramid" class="pyramid-line">
          {{ line }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pyramid.component.css'],
  standalone: true
})
export class PyramidComponent {
  rows = 0; // Number of rows for the pyramid
  pyramid: string[] = []; // Stores the pyramid pattern as an array of strings

  generatePyramid() {
    this.pyramid = [];
    for (let i = 1; i <= this.rows; i++) {
      const spaces = ' '.repeat(this.rows - i);
      const stars = '*'.repeat(2 * i - 1);
      this.pyramid.push(spaces + stars);
    }
  }
}
