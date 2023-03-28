import { Injectable } from "@angular/core";
import { filter, first, from, Observable, of, ReplaySubject } from "rxjs";
import { Joke } from "../models/joke.model";


export class JokeDetailsService {
    getJokeById(id: string): Joke | undefined {
      return this.defaultJokes.find(joke => joke.id === id)
    }


    getJokeById1(id: string): Observable<Joke | undefined> {
      return of(this.getJokeById(id));
    }

    getJokeById2(id: string): Observable<Joke | undefined> {
      return from(this.defaultJokes).pipe(first(joke => joke.id === id));
    }

    getJokeById3(id: string): Observable<Joke | undefined> {
      return from(this.defaultJokes).pipe(filter(joke => joke.id === id));
    }

    getJokeById4(id: string): Observable<Joke | undefined> {
      const subject = new ReplaySubject<Joke>();
      this.defaultJokes.forEach(j => {
        subject.next(j);
      });

      return subject.asObservable().pipe(filter(joke => joke.id === id));
    }


    private defaultJokes: Joke[] = [
        {id: '1', date: new Date(), title: 'Joke_1', content: ''},
        {id: '2', date: new Date(), title: 'Joke_2', content: ''},
        {id: '3', date: new Date(), title: 'Joke_3', content: ''},
        {id: '4', date: new Date(), title: 'Joke_4', content: ''},
      ];
}