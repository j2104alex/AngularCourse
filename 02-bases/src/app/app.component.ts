import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Ejercicio Angular';
  public counter: number = 10;

  increaseBy(value:number): void {
    this.counter += 1;
  }
  decreaseBy(value:number): void {
    this.counter -= 1;
  }
  resetCounter(value:number): void {
    this.counter = 10;
  }
}
