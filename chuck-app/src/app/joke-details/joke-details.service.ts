import { Injectable } from "@angular/core";
import { Joke } from "../models/joke.model";

@Injectable({
    providedIn: 'root'
})
export class JokeDetailsService {
    getJokeById(id: string): Joke | undefined {
      return this.defaultJokes.find(joke => joke.id === id)
    }

    private defaultJokes: Joke[] = [
        {id: '1', date: new Date(), title: 'Joke_1', content: ''},
        {id: '2', date: new Date(), title: 'Joke_2', content: ''},
        {id: '3', date: new Date(), title: 'Joke_3', content: ''},
        {id: '4', date: new Date(), title: 'Joke_4', content: ''},
      ];
}