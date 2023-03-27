import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JokeCardComponent } from './joke-details/joke-card/joke-card.component';
import { Joke } from './models/joke.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(JokeCardComponent) jokeCardComponent: JokeCardComponent | undefined;

  constructor(private readonly router: Router) {

  }

  joke = {
    title: 'Random joke',
    content: 'Chuck Norris once roundhouse kicked Mr Lawrence Thread so hard all that was left of his name was Mr T.',
    date: new Date(2022, 0, 1)
  } as Joke;


  ngOnInit(): void {

  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  logLike(): void {
    console.log(`Joke ${this.joke.title} was appreciated.`);
  }

  logLikesNumber(): void {
    console.log(`Joke ${this.joke.title} has ${this.jokeCardComponent?.likeCounter} likes.`);
  }

  navigateToDetails(): void {
    this.router.navigateByUrl('details/card');
  }
}
