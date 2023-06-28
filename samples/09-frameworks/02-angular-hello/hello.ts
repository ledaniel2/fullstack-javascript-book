import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, {{name}}</h1>`,
})
export class HelloComponent {
  name = 'World';
}

// <app-hello></app-hello>
