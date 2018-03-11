import { Injectable } from '@angular/core';
import { Joke } from './joke';

@Injectable()
export class JokeService { //supposed to be gateway to get jokes

  database: Array<Joke> = [
    new Joke(0, `Someone said you look like an owl...`, `Who?`),
    new Joke(1, `Someone else said you look like an owl...`, `Who?`),
    new Joke(2, `Some girl said you look like an owl...`, `Who?`),
    new Joke(3, `Some dude said you look like an owl...`, `Who?`)
  ]; //can also use Joke[]

  constructor() { 
  }

  getJokeList() : Array<Joke> {
    return this.database;
  }

  getJoke(jokeId : number) : Joke {
    return this.database[jokeId];
  }
}
