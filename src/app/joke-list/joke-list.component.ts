import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Array<Joke>

  constructor() { }

  ngOnInit() {
    this.jokes = (new JokeService()).getJokes();
  }

}
