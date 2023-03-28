import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly http: HttpClient) {}

  private randomJokeUrl = 'https://api.chucknorris.io/jokes/random';
  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.randomJokeUrl);
  }
}
