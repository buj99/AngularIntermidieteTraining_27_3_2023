import { Component, Input, OnInit, OnChanges, AfterViewInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joke } from 'src/app/models/joke.model';
import { JokeDetailsService } from '../joke-details.service';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() joke: Joke | undefined;
  @Output() like = new EventEmitter<void>();



  constructor(private readonly route: ActivatedRoute,
              private readonly jokeDetailsService: JokeDetailsService) {
    route.params.subscribe((parms) => {
      if(parms['id']) {
        this.joke = this.jokeDetailsService.getJokeById(parms['id']);
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
