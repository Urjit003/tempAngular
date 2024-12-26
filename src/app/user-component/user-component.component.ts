import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css',
})
export class UserComponentComponent {
 today : number = Date.now();
 currentFramework : string = '';
  name = 'Urjit ';
  status = 'Single';
  age = 25;
  salary = 40000;
  isBtnDisabled = false;
  text = '';
  shouldShowList = false ;
  inverseBtn() {
    this.isBtnDisabled = !this.isBtnDisabled;
  }inverseList() {
    this.shouldShowList = !this.shouldShowList;

  }
  onInputChange(e: Event) {
    this.text = (e.target as HTMLInputElement).value;
  }
  users = [
    { id: 1, name: 'Urjit', isSingle: true },
    { id: 2, name: 'Priyank', isSingle: true },
    { id: 4, name: 'Shubhanker', isSingle: true },
    { id: 5, name: 'Rahul', isSingle: false },
  ];
}
