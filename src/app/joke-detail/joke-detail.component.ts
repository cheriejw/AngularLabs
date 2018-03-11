import { Component, OnInit } from '@angular/core';

import { Joke } from '../joke';
import { JokeService } from '../joke.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {

  joke: Joke;
  jokeId: number;

  constructor(private route: ActivatedRoute, private service: JokeService) { 
    //private puts in obj, without private variable is function-scoped
  }

  ngOnInit() {
    this.jokeId = this.route.snapshot.params.jokeId;
    this.joke = this.service.getJoke(this.jokeId);
  }

}