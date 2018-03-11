import { TestBed, inject } from '@angular/core/testing';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeService]
    });
  });

  it('should be created', inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
  }));

  it('should return more than zero objects', inject([JokeService], (service: JokeService) => {
    expect(service.getJokeList().length).toBeGreaterThan(0);
  }));

  it('given id, should return right joke', inject([JokeService], (service: JokeService) => {
    expect(service.getJoke(1)).toEqual(service.database[1]);
  }));
});
