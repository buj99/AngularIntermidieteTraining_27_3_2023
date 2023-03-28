import { Component, Input, OnInit, OnChanges, AfterViewInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() joke: Joke | undefined;
  @Output() like = new EventEmitter<void>();

  defaultJokes: Joke[] = [
    {id: '1', date: new Date(), title: 'Joke_1', content: ''},
    {id: '2', date: new Date(), title: 'Joke_2', content: ''},
    {id: '3', date: new Date(), title: 'Joke_3', content: ''},
    {id: '4', date: new Date(), title: 'Joke_4', content: ''},
  ];

  constructor(private readonly route: ActivatedRoute) {
    route.params.subscribe((parms) => {
      if(parms['id']) {
        this.joke = this.defaultJokes.find(joke => joke.id === parms['id']);
      }
    })

  }

  likeCounter = 0;

  ngOnInit(): void {

  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  onLikeClicked(): void {
    this.likeCounter++;
    this.like.emit();
  }
}
