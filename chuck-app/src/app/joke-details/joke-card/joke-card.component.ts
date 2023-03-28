import {
  Component,
  Input,
  OnInit,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joke } from 'src/app/models/joke.model';
import { JokeDetailsService } from '../joke-details.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss'],
})
export class JokeCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() joke: Joke | undefined;
  @Output() like = new EventEmitter<void>();

  jokeFromApi: Joke = {} as Joke;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly jokeDetailsService: JokeDetailsService,
    private readonly dataService: DataService
  ) {
    route.params.subscribe((parms) => {
      if (parms['id']) {
        //this.joke = this.jokeDetailsService.getJokeById(parms['id']);
        this.jokeDetailsService.getJokeById4(parms['id']).subscribe((joke) => {
          this.joke = joke;
        });
      }
    });
  }

  likeCounter = 0;

  ngOnInit(): void {
    this.onRefreshJoke();
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {}

  ngAfterViewInit(): void {}

  onLikeClicked(): void {
    this.likeCounter++;
    this.like.emit();
  }

  onRefreshJoke(): void {
    this.dataService.getRandomJoke().subscribe((data: Joke) => {
      // debugger;
      this.jokeFromApi = data;
    });
  }
}
