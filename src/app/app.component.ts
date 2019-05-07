import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';

  constructor() {
    this.changeName('Juan Ramirez');
  }

  changeName(name): void {
    this.title = name;
  }
}
