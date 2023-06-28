import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <p>{{count}}</p>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
