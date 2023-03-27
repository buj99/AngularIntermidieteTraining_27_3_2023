import { Component } from '@angular/core';
import { Joke } from './models/joke.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  joke = {
    title: 'Random joke',
    content: 'Chuck Norris once roundhouse kicked Mr Lawrence Thread so hard all that was left of his name was Mr T.',
    date: new Date(2022, 0, 1)
  } as Joke;

  logLike(): void {
    console.log(`Joke ${this.joke.title} was appreciated.`);
  }
}
