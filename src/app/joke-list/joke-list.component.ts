import {Component, OnInit} from '@angular/core';
import {Joke} from '../joke';
import {JokeService} from '../joke.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})

export class JokeListComponent implements OnInit {
    jokes: Joke[];

    constructor(private service: JokeService, private router: Router) {
    }

    ngOnInit() {
        this.jokes = this.service.getJokes();
    }

    public showJoke(joke: Joke) {
        this.router.navigate([`/jokes/`,joke.id]);
    }
}
