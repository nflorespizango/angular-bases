import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public titulo: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number)
  {
    this.counter += value;
  }

  reset()
  {
    this.counter = 10;
  }



}
