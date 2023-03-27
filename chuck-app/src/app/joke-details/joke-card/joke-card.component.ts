import { Component, Input, OnInit, OnChanges, AfterViewInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() joke: Joke | undefined;
  @Output() like = new EventEmitter<void>();

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
